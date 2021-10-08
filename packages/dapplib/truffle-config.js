require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food ecology rotate right protect good close army gaze'; 
let testAccounts = [
"0x5141e6ddeb0d33a9a067705cc5afd2c0ad425e2e66fc8c6edfc1c76f29128a36",
"0x28ce433e3ef96083be6eb0943358a7a281a17ca27f000c8e0b811de3abcc3d86",
"0xbfb8b33b95251a20d205d436c886818dc09f65a274f7e2019c97f800c8837dce",
"0x80943f936a24f840b99ff905afbbd878aaddbdac987ee4ad83fa30c744b4b9ea",
"0xc6b8d31cfe19196f81695a24f39981a992ef55a374006137a575d42f14c66bae",
"0x7a698d18fc3cdee3496293a0fc2eeec09718c068182c338e6cc543b4418bd004",
"0x75d8470f51fab4f810440f6ab4930197641a4df3e848887c032a6a77d1fe60cb",
"0x9ba834e674701364ede99785c829778dff2ed8a8aaa82b679804d233650e0497",
"0x4626872fbbe6a44e76d9cbe86a32fd87fc3457df31e496644c6109ae8da8e499",
"0x35dbeee238cc3219a3e70ada7714c9ed6be86d8a2abf969d9fd8d9fdfb012cd5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


