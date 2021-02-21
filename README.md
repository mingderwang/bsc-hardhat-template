# refer to
https://www.binance.org/en/blog/using-hardhat-for-binance-smart-chain/
# check deploy
You can check the deployment status here: https://bscscan.com/ or https://testnet.bscscan.com/

# to verify
* you need to update your own ETHERSCAN API KEY
* modify package.json for verify script to right network and right contract deploy address
* then run 'yarn verify'
```
$ yarn verify
yarn run v1.22.10
$ npx hardhat verify --constructor-args arguments.js 0x92f77C993161B2CE973957BD0C75C1D0ceac495a --network kovan
Nothing to compile
Compiling 1 file with 0.4.24
Successfully submitted source code for contract
contracts/PermittableToken.sol:PermittableToken at 0x92f77C993161B2CE973957BD0C75C1D0ceac495a
for verification on Etherscan. Waiting for verification result...
```

# change contract name to FixedToken.sol
```
https://kovan.etherscan.io/address/0x451abEDDb517fe9960722159cf39c0197Ec5c8e4
https://testnet.bscscan.com/address/0x22e0BfAC6c1aDBb8A545aF31740f32152742f24B

https://rinkeby.etherscan.io/address/0xFD8E2766c68BB8Da5a5AD5718724383fd9358bE6#code
//or
https://rinkeby.etherscan.io/address/0xd071bD1D31AECb4230365309495052732a92aD9c#code
```

# TODO, 
* Domain_saperator should be changed for each ChainID.
