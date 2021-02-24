require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind concert grace option force slender'; 
let testAccounts = [
"0xa314f807997f8bc5cebb0077fb46610431caf3d6bd2a964e68d46a075fe266ca",
"0x0fd3f41542dfc4c3bc99e9994988d9b9ec949bf86eda7d1e4ed188d789c8ce7c",
"0xacd9eb4b172cd92c059ac833b84ff7b24b5abc3e2c27910ea390403ff827a436",
"0xb827640bf03a5e6608301df90fb6fd5825fdcfc534d451317e864aae08372e1d",
"0x8035460fdd9c9bd6197055468e9ff6ab30fdc2fda4491bf269a5d7ed022c8e0a",
"0x0f2cb290fc34bc74aeb39c1098d5fabe45df526f53e55af605f558097451a24b",
"0x156666271d00e48e27783591c4c3e61986dc5baa3fc40dbc0f26a946751f3cd9",
"0x8967cedc3b2a67aa461a0f700caa28869702fc1f9e4f134f85232d4778247329",
"0x3ad40fdb4323bf44a4821f758f89e0e5a5f1a660e250420eb2501baf61359726",
"0xde4bbe2ba557454308a3f054e551e4a1c9230815c181efe83da4d5860f04237f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
