import {formatUnits, parseUnits} from "@ethersproject/units/src.ts/index";

const crypto = require('crypto')
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
    return utils.parseUnits(v, 18).toString();
}

function fromWei(v: string): string {
    return utils.formatUnits(v, 18).toString();
}

function toGWei(v: string): string {
    return utils.parseUnits(v, 9).toString();
}

function fromGWei(v: string): string {
    return utils.formatUnits(v, 9).toString();
}

function now(x: number) {
    let t = new Date().getTime() / 1000;
    t += x;
    return parseInt(t.toString());
}

let _0001w: string = toWei('0.001');
let _0005w: string = toWei('0.005');
let _001w: string = toWei('0.01');
let _004w: string = toWei('0.04');
let _005w: string = toWei('0.05');
let _006w: string = toWei('0.06');
let _007w: string = toWei('0.07');
let _008w: string = toWei('0.08');
let _009w: string = toWei('0.09');
let _01w: string = toWei('0.1');
let _05w: string = toWei('0.5');
let _1w: string = toWei('1');
let _5w: string = toWei('5');
let _10w: string = toWei('10');
let _50w: string = toWei('50');
let _100w: string = toWei('100');
let _1000w: string = toWei('1000');
let _1Tw: string = toWei('1000000000000');
let _1Mw: string = toWei('1000000');

let _1g: string = toGWei('1');
let _5g: string = toGWei('5');
let _10g: string = toGWei('10');
let _50g: string = toGWei('50');
let _100g: string = toGWei('100');
let _1000g: string = toGWei('1000');
let _1Tg: string = toGWei('1000000000000');
let _1Mg: string = toGWei('1000000');

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
        const pairCodeHash = await factory.pairCodeHash();
        // console.log('pairCodeHash', pairCodeHash);
        await router.init(factory.address, weth.address);
        token = await _Token.deploy(dev, router.address);


    });



        /*
        describe("Mass Tests", () => {
            it("Do 20 tranfers", async () => {
                const users = await ethers.getSigners();
                // console.log('users', users.length)
                const balanceOfDev = (await token.balanceOf(dev)).toString();
                const minimumDonationForTicket = (await token.minimumDonationForTicket()).toString();
                const donationAddress = (await token.donationAddress()).toString();
                const lotteryHolderMinBalance = (await token.lotteryHolderMinBalance()).toString();
                // console.log('balanceOfDev           ', balanceOfDev);
                // console.log('minimumDonationForTicket  ', minimumDonationForTicket);
                // console.log('lotteryHolderMinBalance', lotteryHolderMinBalance);
                // console.log(dev);

                await token.transfer(user, balanceOfDev)
                let LotteryHolderChooseOne: any = [], LotteryTriggerEveryNtx: any = [];
                const wallets = await ethers.getSigners();
                for (let i = 0; i < 20; i++) {
                    const wallet = wallets[i];
                    const addr = wallet.address;

                    const tx1 = await token.connect(USER).transfer(addr, minimumDonationForTicket * 3)
                    const tx2 = await token.connect(wallet).transfer(donationAddress, minimumDonationForTicket)
                    // console.log(`${i} ${addr} / ${donationAddress}`);

                    let receipt1: any = await tx1.wait();
                    for (let j in receipt1.events) {
                        const ev = receipt1.events[j];
                        if (ev.event == 'LotteryHolderChooseOne') {
                            // console.log(`\twinner1: ${ev.args[1]}`)
                            LotteryHolderChooseOne.push(ev.args[1]);
                        }
                        if (ev.event == 'LotteryTriggerEveryNtx') {
                            // console.log(`\twinner1: ${ev.args[1]}`)
                            LotteryTriggerEveryNtx.push(ev.args[1]);
                        }
                    }
                    let receipt2: any = await tx2.wait();
                    for (let j in receipt2.events) {
                        const ev = receipt2.events[j];
                        if (ev.event == 'LotteryHolderChooseOne') {
                            // console.log(`\twinner2: ${ev.args[1]}`)
                            LotteryHolderChooseOne.push(ev.args[1]);
                        }
                        if (ev.event == 'LotteryTriggerEveryNtx') {
                            // console.log(`\twinner2: ${ev.args[1]}`)
                            LotteryTriggerEveryNtx.push(ev.args[1]);
                        }
                    }
                }

                // console.log('LotteryHolderChooseOne', LotteryHolderChooseOne);
                // console.log('LotteryTriggerEveryNtx', LotteryTriggerEveryNtx);

            });

        });

         */


        describe("Swap", () => {
            /*
            it("Add liquidity and swap both sides", async () => {

                await token.approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER).approve(router.address, '9999999999999999999999999999999999999999');
                await router.addLiquidityETH(token.address, _1T, 0, 0, dev, 9646498066, {value: _50});

                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: _1});

                await router.connect(USER).swapExactTokensForETHSupportingFeeOnTransferTokens
                ((await token.balanceOf(user)).toString(), 0, [token.address, weth.address], user, 9646498066, {from: user});
            });
            */

            it("test anti-abuse with 5 bnb", async () => {

                let balanceOf = (await token.balanceOf(dev)).toString();

                await token.approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER).approve(router.address, '9999999999999999999999999999999999999999');
                await router.addLiquidityETH(token.address, balanceOf, 0, 0, dev, 9646498066, {value: _5w});

                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.03')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.03')});


                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});
            });


            it("test anti-abuse with 50 bnb", async () => {

                let balanceOf = (await token.balanceOf(dev)).toString();

                await token.approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER).approve(router.address, '9999999999999999999999999999999999999999');
                await router.addLiquidityETH(token.address, balanceOf, 0, 0, dev, 9646498066, {value: toWei('50')});

                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.03')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});

                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.03')});


                await router.connect(USER).addLiquidityETH(token.address, (await token.balanceOf(user)).toString(), 0, 0, dev, 9646498066, {value: _005w});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: toWei('0.07')});
            });

            /*

            it("Do 10 buy", async () => {

                await token.approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER).approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER1).approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER2).approve(router.address, '9999999999999999999999999999999999999999');
                await token.connect(USER3).approve(router.address, '9999999999999999999999999999999999999999');
                await router.addLiquidityETH(token.address, _1T, 0, 0, dev, 9646498066, {value: _50});

                // console.log('user', user)
                // console.log('user1', user1)
                // console.log('user2', user2)
                // console.log('user3', user3)

                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: _1});
                await router.connect(USER1).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user1, 9646498066, {from: user1, value: _1});
                await router.connect(USER2).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user2, 9646498066, {from: user2, value: _1});
                await router.connect(USER3).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user3, 9646498066, {from: user3, value: _1});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: _1});
                await router.connect(USER1).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user1, 9646498066, {from: user1, value: _1});
                await router.connect(USER2).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user2, 9646498066, {from: user2, value: _1});
                await router.connect(USER3).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user3, 9646498066, {from: user3, value: _1});
                await router.connect(USER).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user, 9646498066, {from: user, value: _1});
                await router.connect(USER1).swapExactETHForTokensSupportingFeeOnTransferTokens
                (0, [weth.address, token.address], user1, 9646498066, {from: user1, value: _1});


                await router.connect(USER).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user});
                await router.connect(USER1).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user1});
                await router.connect(USER2).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user2});
                await router.connect(USER3).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user3});
                await router.connect(USER).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user});
                await router.connect(USER1).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user1});
                await router.connect(USER2).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user2});
                await router.connect(USER3).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user3});
                await router.connect(USER).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user});
                await router.connect(USER1).swapExactTokensForETHSupportingFeeOnTransferTokens
                (_1M, 0, [token.address, weth.address], user, 9646498066, {from: user1});


            });
            */
        });
/*
        describe("Transfers", () => {
            it("Do 10 transfers of 100 each", async () => {
                // 1+1+2+1+1+0.5+1+0.5+1
                await token.transfer(user, MINTED);
                await token.connect(USER).transfer(user1, CEM);
                const bal = (await token.balanceOf(user1)).toString();

                await token.connect(USER).transfer(user1, CEM);
                await token.connect(USER).transfer(user1, CEM);
                await token.connect(USER).transfer(user1, CEM);
                // 4 transfer of 100 each, user must receive 91 each total of 364 (91*4=364)
                expect(fromWei(await token.balanceOf(user1))).to.be.equal('364.0');

                await token.connect(USER).transfer(user2, CEM);
                await token.connect(USER).transfer(user2, CEM);
                await token.connect(USER).transfer(user2, CEM);

                await token.connect(USER).transfer(user3, CEM);
                await token.connect(USER).transfer(user3, CEM);
                await token.connect(USER).transfer(user3, CEM);

                // dev fund should be 10 (1%*100)
                expect(fromWei(await token.balanceOf(await token.devFundWalletAddress()))).to.be.equal('10.0');

                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);
                await token.connect(USER1).transfer(user, ONE);
                await token.connect(USER2).transfer(user1, ONE);
                await token.connect(USER3).transfer(user2, ONE);

            });


            it("Do transfer and check balances", async () => {

                await token.transfer(user, CEM);
                await token.connect(USER).transfer(user1, CEM);

                const holderAddress: string = await token.holderAddress();
                const burnAddress: string = await token.burnAddress();
                const charityWalletAddress: string = await token.charityWalletAddress();
                const devFundWalletAddress: string = await token.devFundWalletAddress();
                const marketingFundWalletAddress: string = await token.marketingFundWalletAddress();
                const lotteryPotWalletAddress: string = await token.lotteryPotWalletAddress();
                const faaSWalletAddress: string = await token.faaSWalletAddress();

                const balanceOf_dev = await token.balanceOf(dev);
                const balanceOf_holderAddress = await token.balanceOf(holderAddress);
                const balanceOf_burnAddress = await token.balanceOf(burnAddress);
                const balanceOf_charityWalletAddress = await token.balanceOf(charityWalletAddress);
                const balanceOf_devFundWalletAddress = await token.balanceOf(devFundWalletAddress);
                const balanceOf_marketingFundWalletAddress = await token.balanceOf(marketingFundWalletAddress);
                const balanceOf_lotteryPotWalletAddress = await token.balanceOf(lotteryPotWalletAddress);
                const balanceOf_faaSWalletAddress = await token.balanceOf(faaSWalletAddress);

                // should be 999999999999900.999999999 because we transferred only 100
                expect(fromWei(balanceOf_dev)).to.be.equal('999999999999900.999999999');

                expect(fromWei(balanceOf_faaSWalletAddress)).to.be.equal('1.0');

                expect(fromWei(balanceOf_lotteryPotWalletAddress)).to.be.equal('0.5');

                // holder wallet should get 0.5% on each transfer
                expect(fromWei(balanceOf_holderAddress)).to.be.equal('0.5');

                // holder wallet should get 1% on each transfer
                expect(fromWei(balanceOf_burnAddress)).to.be.equal('1.0');

                // charity wallet should get 2% on each transfer
                expect(fromWei(balanceOf_charityWalletAddress)).to.be.equal('2.0');

                // dev wallet should get 1% on each transfer
                expect(fromWei(balanceOf_devFundWalletAddress)).to.be.equal('1.0');

                // market wallet should get 2% on each transfer
                expect(fromWei(balanceOf_marketingFundWalletAddress)).to.be.equal('1.0');

                // lottery wallet should get 0.5% on each transfer
                expect(fromWei(balanceOf_lotteryPotWalletAddress)).to.be.equal('0.5');

            });

        });

        describe("Loterry Tests", () => {

            it("transfer above limit ticket test", async () => {

                // enable holder lottery
                await token.setLottery1of1kEnabled(true);

                // the donation address, if we transfer to this address, we get a ticket
                const donationAddress = await token.donationAddress();

                // mininum transfer amount to get a transfer ticket: 1 (1_000_000_000) token
                const minimumDonationForTicket = await token.minimumDonationForTicket();
                expect(fromWei(minimumDonationForTicket)).to.be.equal('1.0');

                // should not get a ticket, bellow limit.
                await token.transfer(user, toWei('0.1'));
                let lotteryTotalTicket = (await token.lotteryTotalTicket()).toString();
                expect(lotteryTotalTicket).to.be.equal('0'); // 0 = dead address

                // should get a ticket, above min limit and to donation
                await token.transfer(donationAddress, toWei('1.1'));

                lotteryTotalTicket = (await token.lotteryTotalTicket()).toString();
                // we should have 1 valid user ticket
                expect(lotteryTotalTicket).to.be.equal('1');

                // ticket at 0 index should be ticket 1
                let lotteryUserTickets = (await token.lotteryUserTickets(dev));
                expect(lotteryUserTickets[0].toString()).to.be.equal('0');
            });

            it("lottery1of1k", async () => {

                // enable holder lottery
                await token.setLottery1of1kEnabled(true);
                await token.setLottery1of1kDebug(true);
                await token.setDisableTicketsTs(false);
                await token.setLottery1of1kLimit(3);
                await token.setLottery1of1kMinLimit(3);

                // the donation address, if we transfer to this address, we get a ticket
                const minimumDonationForTicket = (await token.minimumDonationForTicket()).toString();
                const donationAddress = await token.donationAddress();

                // populate users wallets:
                await token.transfer(user, minimumDonationForTicket);
                await token.transfer(user1, minimumDonationForTicket);
                await token.transfer(user2, minimumDonationForTicket);
                await token.transfer(user3, minimumDonationForTicket);

                // should get a ticket, above min limit and to donation


                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER).transfer(donationAddress, minimumDonationForTicket);

                await token.connect(USER1).transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER2).transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER3).transfer(donationAddress, minimumDonationForTicket);

                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                // lottery should be triggered at anytime above
                const lottery1of1kWinner = await token.lottery1of1kWinner();
                expect(lottery1of1kWinner).not.to.be.equal('0x0000000000000000000000000000000000000000');

                // populate users wallets:
                await token.transfer(user, minimumDonationForTicket);
                await token.transfer(user1, minimumDonationForTicket);
                await token.transfer(user2, minimumDonationForTicket);
                await token.transfer(user3, minimumDonationForTicket);

                // should get a ticket, above min limit and to donation


                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER).transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER1).transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER2).transfer(donationAddress, minimumDonationForTicket);
                await token.connect(USER3).transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);
                await token.transfer(donationAddress, minimumDonationForTicket);

            });


            it("lotteryHolders", async () => {

                await token.setLotteryHoldersEnabled(true);
                await token.setLotteryHoldersDebug(false);
                const lotteryHolderMinBalance = toWei('1000');
                // mass transfer to
                await token.transfer(user, toWei('10000'));

                await token.connect(USER).transfer(user1, lotteryHolderMinBalance);
                await token.connect(USER).transfer(user2, lotteryHolderMinBalance);
                await token.connect(USER).transfer(user3, lotteryHolderMinBalance);

                await token.connect(USER).transfer(dev, toWei('1'));
                await token.connect(USER1).transfer(dev, toWei('1'));
                await token.connect(USER2).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(user1, lotteryHolderMinBalance);
                await token.connect(USER3).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(dev, toWei('1'));
                await token.connect(USER1).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(user1, lotteryHolderMinBalance);
                await token.connect(USER2).transfer(dev, toWei('1'));
                await token.connect(USER3).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(user1, lotteryHolderMinBalance);
                await token.connect(USER1).transfer(dev, toWei('1'));
                await token.connect(USER2).transfer(dev, toWei('1'));
                await token.connect(USER).transfer(user1, lotteryHolderMinBalance);
                await token.connect(USER3).transfer(dev, toWei('1'));


            });


        });
        */
});
