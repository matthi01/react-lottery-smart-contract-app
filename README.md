<p><b>React Front End - Lottery Smart Contract</b></p>

<p><b>Note: </b>This application assumes that metamask browser extension is installed!</p>

<p>So far the main point of this application is to make use of the ethereum contract... not too worried about styling at this point. It also does not have any error handling yet.</p>

<p><b>Contract Deployed (Rinkeby Network) - Address: 0x7cB67db9E05241b8Db580F12b017eF8a86afAfEE</b></p>

<p>This application will make use of the Lottery Smart Contract (also in github repository).</p>
<p>The contract has been deployed to the Rinkeby test network </p>
<p>This contract consists of a prize pool (collection of ether) and players.</p>
<p>Once a player has submitted money to the contract (prize pool) they will automatically be recorded as a player in the lottery. </p>
<p>Once enough people have entered the contract, a third party manager will TELL THE CONTRACT to pick a winner from the players</p>
<p>Once a winner is picked, all the money in the prize pool will be sent to the winning player.</p>
<p>At that point the contract will reset and will be ready to accept new players again.</p>
