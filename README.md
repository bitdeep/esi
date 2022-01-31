mainnet pcs router v2 0x10ED43C718714eb63d5aA57B78B54704E256024E
testnet pcs router v2 0x1Ed675D5e63314B760162A3D1Cae1803DCFC87C7

test v10 0x39AD490d7952022AEA6e871937061e18f01fEc2E

---

Token: 0x39ad490d7952022aea6e871937061e18f01fec2e
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
