require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.3",
  networks: {
   rinkeby: {
     url: "https://rinkeby.infura.io/v3/2ed6a7ef953d4f66ac9f49aa772e2d7b", //Infura url with projectId
     accounts: ["132655eede6413c4e2ceec76b90980db5fa93586b0b869df27aaebc9e44ef9a5"] // add the account that will deploy the contract (private key)
    },
  }
};