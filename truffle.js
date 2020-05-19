var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic =  "service comic much push broccoli use engine lunar bench wait drum brother";

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