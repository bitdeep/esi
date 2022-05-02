import { formatUnits, parseUnits } from "@ethersproject/units/src.ts/index";
import hw3 from "@nomiclabs/hardhat-web3";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ContractFactory, constants, utils, Contract, BigNumber } from 'ethers';
import Web3 from 'web3';
import hre from "hardhat";
import { ethers } from "hardhat";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import loki from "lokijs";

import cron from "node-cron";

class Accounts {
    main: any;
    charity: any;
    dev: any;
    marketing: any;
    fass: any;

    constructor() {
        this.main = {};
        this.charity = {};
        this.dev = {};
        this.marketing = {}
        this.fass = {};
    }
}

const bot = async () => {


    var db = new loki("./bot.db", { autoload: true });

    let weth: any, factory: any, router: any, token: any,usdt: any;
    const AMOUNT_TO_SWAP = BigNumber.from('1000000000000000000');
    const [main, holderPot, charity, dev, marketing, dnoationPot, fass] = await ethers.getSigners();
    const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    const esonPairAddress = '0xb0ab3e53d98c22cbef6f9e53815ea41c07c270a3';
    const esonAddress = '0xfaf99daadb688d980f91932c592729da83b100e7';
    const uniswapFactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
    const uniswapRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
    const usdtEthPairAddress = '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852';
    const accountByName = { main, charity, dev, marketing, fass };


    const routerFactory = await ethers.getContractFactory('UniswapV2Router02');
    const factoryFactory = await ethers.getContractFactory('UniswapV2Factory');
    const wethFactory = await ethers.getContractFactory('FaucetERC20');
    const usdtFactory = await ethers.getContractFactory('FaucetERC20');
    const tokenFactory = await ethers.getContractFactory("Token");


    const provider = hre.network.provider;
    // @ts-ignore
    const web3 = new Web3(provider);
    // @ts-ignore


    weth = await wethFactory.attach(wethAddress).connect(main);
    usdt = await usdtFactory.attach(wethAddress).connect(main);
    factory = await factoryFactory.attach(uniswapFactoryAddress).connect(main);
    router = await routerFactory.attach(uniswapRouterAddress).connect(main);

    token = await tokenFactory.attach(esonAddress).connect(main);
    // @ts-ignore
    const keys = Object.keys(accountByName);
    for (let i = 0; i < keys.length; i++) {
        // @ts-ignore
        var collection = db.getCollection(keys[i]);
        // @ts-ignore
        const account = accountByName[keys[i]];
        const totalTransfers = collection.data[0].transfers.reduce((acc: BigNumber, transfer: BigNumber) => acc.add(BigNumber.from(transfer)), BigNumber.from(0));
        const initialAmount = BigNumber.from(collection.data[0].initialAmount);
        // @ts-ignore
        const currentBalance = (await token.balanceOf(account.address))
        if (currentBalance.sub(AMOUNT_TO_SWAP.mul(2)).gte(initialAmount.add(totalTransfers))) {

            const ethBalance = BigNumber.from(await web3.eth.getBalance(account.address));
            if (ethBalance.gt(0)) {
                var blockNumber = await web3.eth.getBlockNumber();
                var timestamp = (await web3.eth.getBlock(blockNumber)).timestamp;

                collection.data[0].transfers.push(AMOUNT_TO_SWAP);
                const path = [token.address, weth.address];
                // const approveResult = await token.approve(router.address, AMOUNT_TO_SWAP);
                // @ts-ignore
                const result = await router.connect(account
                ).swapExactTokensForETHSupportingFeeOnTransferTokens(AMOUNT_TO_SWAP, 0, path, token.address, timestamp, { gasLimit: BigNumber.from(1000000) });
            }
        }
    }
    db.saveDatabase();
}
cron.schedule('*/10 * * * *', () => {
    console.log('running a task every minute');
    bot();
}, {});
