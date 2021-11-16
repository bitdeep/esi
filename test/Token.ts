const { ethers } = require("hardhat");
const { solidity } = require("ethereum-waffle");
const { expect } = require("chai");
require("@nomiclabs/hardhat-web3");

const chalk = require('chalk');
// let _yellowBright = chalk.yellowBright;
const _magenta = chalk.magenta;
const _cyan = chalk.cyan;
const _yellow = chalk.yellow;
const _red = chalk.red;
const _blue = chalk.blue;
const _green = chalk.green;

describe("Token contract", () => {
    let weth:any, factory:any, router:any, token:any;
    let s_reserve:any;
    let dev:string, user:string, user1:string, feeAddress:string, reserve:string;
    let MINTED:string = '1000000000000';
    beforeEach(async () => {
        const [_dev, _user, _user1, _feeAddress, _reserve] = await ethers.getSigners();
        s_reserve = _reserve;
        dev = _dev.address; user = _user.address; user1 = _user1.address;
        feeAddress = _feeAddress.address; reserve = _reserve.address;
        const _Token = await ethers.getContractFactory("Token");
        const _WSDN = await ethers.getContractFactory("WSDN");
        // const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
        const _UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
        const _UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");

        weth = await _WSDN.deploy();
        factory = await _UniswapV2Factory.deploy();
        router = await _UniswapV2Router02.deploy();
        await router.init(factory.address, weth.address);
        token = await _Token.deploy(dev, router.address);



    });
    describe("Lottery", () => {
        it("lottery", async () => {
            const devBalance = await token.balanceOf(dev);
            console.log('devBalance', devBalance.toString());

            await token.transfer(user, MINTED);
            const userBalance:string = await token.balanceOf(user);
            console.log('user', userBalance.toString());

            /*
            const hardhatToken = await Token.deploy();
            const ownerBalance = await hardhatToken.balanceOf(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
            */
        });
    });
});
