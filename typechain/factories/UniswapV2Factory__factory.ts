/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2Factory,
  UniswapV2FactoryInterface,
} from "../UniswapV2Factory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allPairsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeToSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pairCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b03191633179055612862806100326000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639aab9248116100665780639aab9248146100fb578063a2e74af614610103578063c9c653961461012b578063e6a4390514610159578063f46901ed1461018757610093565b8063017e7e5814610098578063094b7415146100bc5780631e3dd18b146100c4578063574f2ba3146100e1575b600080fd5b6100a06101ad565b604080516001600160a01b039092168252519081900360200190f35b6100a06101bc565b6100a0600480360360208110156100da57600080fd5b50356101cb565b6100e96101f2565b60408051918252519081900360200190f35b6100e96101f8565b6101296004803603602081101561011957600080fd5b50356001600160a01b031661022a565b005b6100a06004803603604081101561014157600080fd5b506001600160a01b0381358116916020013516610297565b6100a06004803603604081101561016f57600080fd5b506001600160a01b038135811691602001351661059c565b6101296004803603602081101561019d57600080fd5b50356001600160a01b03166105c2565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101d857fe5b6000918252602090912001546001600160a01b0316905081565b60035490565b60006040518060200161020a9061062f565b6020820181038252601f19601f8201166040525080519060200120905090565b6001546001600160a01b03163314610275576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156102f6576040805162461bcd60e51b81526020600482015260136024820152724944454e544943414c5f41444452455353455360681b604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b03161061031957838561031c565b84845b90925090506001600160a01b03821661036b576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b6001600160a01b038281166000908152600260209081526040808320858516845290915290205416156103d3576040805162461bcd60e51b815260206004820152600b60248201526a504149525f45584953545360a81b604482015290519081900360640190fd5b6060604051806020016103e59061062f565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f59450846001600160a01b031663485cc95585856040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b1580156104b257600080fd5b505af11580156104c6573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b0316331461060d576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6121f08061063d8339019056fe60806040526001600c5534801561001557600080fd5b5060408051808201825260048152634c50763160e01b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fc7642c2d1c1ae57b59997aeaecb0ff57a05c65011aac27dc862f8d6bc842aeb6818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b031916331790556120ee806101026000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610ae5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b05565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b2f565b604080519115158252519081900360200190f35b610339610b46565b604080516001600160a01b039092168252519081900360200190f35b61035d610b55565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b5b565b61035d610bef565b6103b5610c13565b6040805160ff9092168252519081900360200190f35b61035d610c18565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c1e565b61035d610c97565b61035d610c9d565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610ca3565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610f8a565b61035d610f9c565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610fa2565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316610fb4565b6040805192835260208301919091528051918290030190f35b610244611353565b61031d600480360360408110156104e857600080fd5b506001600160a01b038135169060200135611372565b61035d61137f565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b0316611385565b6103396114ec565b6103396114fb565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561150a565b61035d600480360360408110156105a357600080fd5b506001600160a01b03813581169160200135166116f5565b61023a611712565b600c54600114610603576040805162461bcd60e51b81526020600482015260066024820152651313d0d2d15160d21b604482015290519081900360640190fd5b6000600c55841515806106165750600084115b610667576040805162461bcd60e51b815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600080610672610b05565b5091509150816001600160701b0316871080156106975750806001600160701b031686105b6106e1576040805162461bcd60e51b8152602060048201526016602482015275494e53554646494349454e545f4c495155494449545960501b604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061071f5750806001600160a01b0316896001600160a01b031614155b61075d576040805162461bcd60e51b815260206004820152600a602482015269494e56414c49445f544f60b01b604482015290519081900360640190fd5b8a1561076e5761076e828a8d611869565b891561077f5761077f818a8c611869565b861561083157886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561081857600080fd5b505af115801561082c573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561087757600080fd5b505afa15801561088b573d6000803e3d6000fd5b505050506040513d60208110156108a157600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108ed57600080fd5b505afa158015610901573d6000803e3d6000fd5b505050506040513d602081101561091757600080fd5b5051925060009150506001600160701b0385168a9003831161093a576000610949565b89856001600160701b03160383035b9050600089856001600160701b0316038311610966576000610975565b89856001600160701b03160383035b905060008211806109865750600081115b6109d7576040805162461bcd60e51b815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b60006109f96109e78460036119f5565b6109f3876103e86119f5565b90611a58565b90506000610a0b6109e78460036119f5565b9050610a30620f4240610a2a6001600160701b038b8116908b166119f5565b906119f5565b610a3a83836119f5565b1015610a71576040805162461bcd60e51b81526020600482015260016024820152604b60f81b604482015290519081900360640190fd5b5050610a7f84848888611aa8565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b604051806040016040528060048152602001634c50763160e01b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b3c338484611c5c565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bda576001600160a01b0384166000908152600260209081526040808320338452909152902054610bb59083611a58565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610be5848484611cbe565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c69576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610ce5576040805162461bcd60e51b81526020600482015260066024820152651313d0d2d15160d21b604482015290519081900360640190fd5b6000600c81905580610cf5610b05565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d4957600080fd5b505afa158015610d5d573d6000803e3d6000fd5b505050506040513d6020811015610d7357600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dc657600080fd5b505afa158015610dda573d6000803e3d6000fd5b505050506040513d6020811015610df057600080fd5b505190506000610e09836001600160701b038716611a58565b90506000610e20836001600160701b038716611a58565b90506000610e2e8787611d6c565b60005490915080610e6557610e516103e86109f3610e4c87876119f5565b611eac565b9850610e6060006103e8611efe565b610ea8565b610ea56001600160701b038916610e7c86846119f5565b81610e8357fe5b046001600160701b038916610e9886856119f5565b81610e9f57fe5b04611f88565b98505b60008911610efd576040805162461bcd60e51b815260206004820152601d60248201527f494e53554646494349454e545f4c49515549444954595f4d494e544544000000604482015290519081900360640190fd5b610f078a8a611efe565b610f1386868a8a611aa8565b8115610f3d57600854610f39906001600160701b0380821691600160701b9004166119f5565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c54600114610ff7576040805162461bcd60e51b81526020600482015260066024820152651313d0d2d15160d21b604482015290519081900360640190fd5b6000600c81905580611007610b05565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561106357600080fd5b505afa158015611077573d6000803e3d6000fd5b505050506040513d602081101561108d57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b1580156110db57600080fd5b505afa1580156110ef573d6000803e3d6000fd5b505050506040513d602081101561110557600080fd5b5051306000908152600160205260408120549192506111248888611d6c565b6000549091508061113584876119f5565b8161113c57fe5b049a508061114a84866119f5565b8161115157fe5b04995060008b118015611164575060008a115b6111b5576040805162461bcd60e51b815260206004820152601d60248201527f494e53554646494349454e545f4c49515549444954595f4255524e4544000000604482015290519081900360640190fd5b6111bf3084611fa0565b6111ca878d8d611869565b6111d5868d8c611869565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561121b57600080fd5b505afa15801561122f573d6000803e3d6000fd5b505050506040513d602081101561124557600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561129157600080fd5b505afa1580156112a5573d6000803e3d6000fd5b505050506040513d60208110156112bb57600080fd5b505193506112cb85858b8b611aa8565b81156112f5576008546112f1906001600160701b0380821691600160701b9004166119f5565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060038152602001624c763160e81b81525081565b6000610b3c338484611cbe565b6103e881565b600c546001146113c5576040805162461bcd60e51b81526020600482015260066024820152651313d0d2d15160d21b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b03948516949093169261146e9285928792611469926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561143757600080fd5b505afa15801561144b573d6000803e3d6000fd5b505050506040513d602081101561146157600080fd5b505190611a58565b611869565b6114e281846114696008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561143757600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b42841015611549576040805162461bcd60e51b81526020600482015260076024820152661156141254915160ca1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611664573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061169a5750886001600160a01b0316816001600160a01b0316145b6116df576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b6116ea898989611c5c565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611752576040805162461bcd60e51b81526020600482015260066024820152651313d0d2d15160d21b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611862926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156117a357600080fd5b505afa1580156117b7573d6000803e3d6000fd5b505050506040513d60208110156117cd57600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561181a57600080fd5b505afa15801561182e573d6000803e3d6000fd5b505050506040513d602081101561184457600080fd5b50516008546001600160701b0380821691600160701b900416611aa8565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b602083106119165780518252601f1990920191602091820191016118f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611978576040519150601f19603f3d011682016040523d82523d6000602084013e61197d565b606091505b50915091508180156119ab5750805115806119ab57508080602001905160208110156119a857600080fd5b50515b6119ee576040805162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015290519081900360640190fd5b5050505050565b6000811580611a1057505080820282828281611a0d57fe5b04145b610b40576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b40576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611ac657506001600160701b038311155b611b02576040805162461bcd60e51b81526020600482015260086024820152674f564552464c4f5760c01b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611b3257506001600160701b03841615155b8015611b4657506001600160701b03831615155b15611bb1578063ffffffff16611b6e85611b5f86612032565b6001600160e01b031690612044565b600980546001600160e01b03929092169290920201905563ffffffff8116611b9984611b5f87612032565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611ce19082611a58565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611d109082612069565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611dbd57600080fd5b505afa158015611dd1573d6000803e3d6000fd5b505050506040513d6020811015611de757600080fd5b5051600b546001600160a01b038216158015945091925090611e98578015611e93576000611e24610e4c6001600160701b038881169088166119f5565b90506000611e3183611eac565b905080821115611e90576000611e53611e4a8484611a58565b600054906119f5565b90506000611e6c83611e668660056119f5565b90612069565b90506000818381611e7957fe5b0490508015611e8c57611e8c8782611efe565b5050505b50505b611ea4565b8015611ea4576000600b555b505092915050565b60006003821115611eef575080600160028204015b81811015611ee957809150600281828581611ed857fe5b040181611ee157fe5b049050611ec1565b50611ef9565b8115611ef9575060015b919050565b600054611f0b9082612069565b60009081556001600160a01b038316815260016020526040902054611f309082612069565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310611f975781611f99565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611fc39082611a58565b6001600160a01b03831660009081526001602052604081209190915554611fea9082611a58565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161206157fe5b049392505050565b80820182811015610b40576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfea26469706673582212203e24507cad2bf58a2234310ad02f8bf050b237398f152efc426707a9d5d8ca1464736f6c634300060c0033a2646970667358221220b8a0f402f386b0e9aec1f312f120320c5c432cd88b9eff193ebe8e9542ade4ad64736f6c634300060c0033";

type UniswapV2FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Factory__factory extends ContractFactory {
  constructor(...args: UniswapV2FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2Factory> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Factory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV2Factory {
    return super.attach(address) as UniswapV2Factory;
  }
  connect(signer: Signer): UniswapV2Factory__factory {
    return super.connect(signer) as UniswapV2Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2FactoryInterface {
    return new utils.Interface(_abi) as UniswapV2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Factory {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Factory;
  }
}
