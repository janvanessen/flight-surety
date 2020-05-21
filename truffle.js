var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic =  "soon tuna credit rookie hover venue rural material often upset doll cabbage";

module.exports = {
  networks: {
    development: {
      // provider: function() {
      //   return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      // },
      host: "127.0.0.1",
      port: 7545,
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};