import Web3 from 'web3';

// metamask will automatically inject web3 into any active page. However this is the old version of web3 which does not support promises.
// need to use the new version of web3, but with the provider that is given by the injected version from metamask.
// this provider is already configured for rinkeby and has access to all account addresses and public and private keys.
const web3 = new Web3(window.web3.currentProvider);

export default web3;