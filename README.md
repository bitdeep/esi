mainnet pcs router v2 0x10ED43C718714eb63d5aA57B78B54704E256024E

testnet pcs router v2 0x1Ed675D5e63314B760162A3D1Cae1803DCFC87C7
testnet pcs router v2 0x9ac64cc6e4415144c455bd8e4837fea55603e5c3 
 (https://pancake.kiemtienonline360.com/#/swap)

wbnb 0xae13d989dac2f0debff460ac112a837c89baa7cd

TSTv15 0xe2651aC1A3752F52eb56608acc2d8010aFdeF1eB
TSTv16 0x42acf33d14FAa3410fD6b18050DDEa0A25047507
TSTv18 0x68d137E03581aC0A604702a9e143C2BA133bA369
TSTv19 0x2b07887Ff462CCC39F8422c236D7B9636A5bbb02


---


Lottery of Holders conditions:
- need 3 tx to trigger lottery prize.
- need that getPrizeForHolders return any amount.
- user balance must be >= lotteryHolderMinBalance (100).
 
How to check:
- then transfer from holderAddress to winner.
- then check lotteryHoldersWinner to see last winner.

Random Lottery by tx amount conditions:

To be elegible:

- Transferred amount should be >= lotteryMinTicketValue (1)
- Transer should be a donnation to lotteryPotWalletAddress (59a2)

To trigger prize:

- getPrizeForEach1k must return any value.
- lottery1of1kIndex must be >= 3

How to check:

- check lottery1of1kWinner for last winner.

---

0x83d6C3436921C318B1aFc3212E21Cf1261D6ADb2
0x42D601F2f67B6cCeCdE3e3039A0A692811dE724B
0x99e29Cd207B3DDa1E80962501528c1abB474F75B
0x7Ccc053bd9cdd9c0309F8418c74917d095e91912

0x7e8A2d57FFE236d868735cC1Cd7c6CB1116859A2 lottery
