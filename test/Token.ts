import {formatUnits, parseUnits} from "@ethersproject/units/src.ts/index";

const {ethers} = require("hardhat");
const {solidity} = require("ethereum-waffle");
const {expect} = require("chai");
require("@nomiclabs/hardhat-web3");
import {ContractFactory, constants, utils, Contract, BigNumber} from 'ethers';

const chalk = require('chalk');
// let _yellowBright = chalk.yellowBright;
const _magenta = chalk.magenta;
const _cyan = chalk.cyan;
const _yellow = chalk.yellow;
const _red = chalk.red;
const _blue = chalk.blue;
const _green = chalk.green;

function toWei(v: string): string {
    return utils.parseUnits(v, 9).toString();
}

function fromWei(v: string): string {
    return utils.formatUnits(v, 9).toString();
}

describe("Token contract", () => {
    let weth: any, factory: any, router: any, token: any;
    let s_reserve: any;
    let dev: string, user: string, user1: string, user2: string, user3: string, feeAddress: string, reserve: string;
    let MINTED: string = toWei('1000');
    let ONE: string = toWei('1');
    let CEM: string = toWei('100');
    let USER: any, USER1: any, USER2: any, USER3: any;
    beforeEach(async () => {
        const [_dev, _user, _user1, _user2, _user3, _feeAddress, _reserve] = await ethers.getSigners();
        s_reserve = _reserve;
        USER = _user;
        USER1 = _user1;
        USER2 = _user2;
        USER3 = _user3;
        dev = _dev.address;
        user = _user.address;
        user1 = USER1.address;
        user2 = USER2.address;
        user3 = USER3.address;
        feeAddress = _feeAddress.address;
        reserve = _reserve.address;
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
            const donation: string = '0x000000000000000000000000000000000000000d';

            async function dump(title: string, usr:string) {
                const tickets: any = await token.loterryUserTickets(usr);
                const uts: any = await token.userTicketsTs(usr);
                const t: any = await token.lotteryTotalTicket();
                const ts: any = await token.lotwinnerTimestamp();
                const ticket: any = await token.winNum();
                const getPrizeForEach1k: any = await token.getPrizeForEach1k();
                const getPrizeForHolders: any = await token.getPrizeForHolders();
                const lotnonce: any = await token.lotNonce();
                const lotwinner: any = await token.lotWinner();
                const balanceOfWiner: any = await token.balanceOf(lotwinner);
                const str: string = '\t' + title + ' balWin=' + fromWei(balanceOfWiner) + ' nonce=' + lotnonce +
                    ' prize1k=' + fromWei(getPrizeForEach1k) + ' prizeMontlh=' + fromWei(getPrizeForHolders) + ' ticket=' + ticket +
                    ' ts=' + ts + ' uts=' + uts + ' t=' + t + ' tickets=' + tickets.join(',');
                console.log(_yellow(str));
            }

            await token.transfer(user, MINTED);
            console.log(  (await token.getTicketsByBalance()) );
            await token.transfer(user1, MINTED);
            console.log(  (await token.getTicketsByBalance()) );
            await token.transfer(user2, MINTED);
            console.log(  (await token.getTicketsByBalance()) );
            await token.transfer(user3, MINTED);
            console.log(  (await token.getTicketsByBalance()) );


            await token.connect(USER).transfer(donation, CEM);
            console.log(  (await token.getTicketsByBalance()) );

            const b = await token.balanceOf(user);
            await token.connect(USER).transfer(user1, b);
            console.log(  (await token.getTicketsByBalance()) );

            // dump('USER donation', user);
/*
            await token.connect(USER1).transfer(donation, CEM);
            dump('USER1 donation', user1);

            await token.connect(USER2).transfer(donation, CEM);
            dump('USER2 donation', user2);

            await token.connect(USER3).transfer(donation, CEM);
            dump('USER3 donation', user3);


            await token.connect(USER).transfer(user1, CEM);
            dump('tr USER', user);

            await token.connect(USER1).transfer(user1, CEM);
            dump('tr USER1', user1);

            await token.connect(USER2).transfer(user1, CEM);
            dump('tr USER2', user2);

            await token.connect(USER3).transfer(user1, CEM);
            dump('tr USER3', user3);
*/
        });
    });
});
