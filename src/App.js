import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "",
    messageClass: ""
  };

  // need to get the manager address
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({
      manager: manager,
      players: players,
      balance: balance
    });
  }

  // using arrow function so 'this' will refer to the component itself
  onSubmitHandler = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Sending transaction...",
      messageClass: "Pending"
    });

    //submit transaction
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({
      message: "Transaction complete. Lottery entered.",
      messageClass: "Success"
    });
  };

  onClickHandler = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Sending transaction...",
      messageClass: "Pending"
    });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({
      message: "Winner selected! Money transferred. Lottery reset.",
      messageClass: "Success"
    });
  };

  render() {
    // checking if web3 is properly hooked up with the recycled provider
    // web3.eth.getAccounts().then(console.log);

    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. <br />
          There are currently {this.state.players.length} players. <br />
          Prize pool: {web3.utils.fromWei(this.state.balance, "ether")} ether.
        </p>

        <hr />

        <form onSubmit={this.onSubmitHandler}>
          <h4>Join Lottery</h4>
          <div>
            <label>
              Amount of ether to enter (must be more than 0.01 ether):
            </label>
            <input
              value={this.state.value}
              onChange={event => {
                this.setState({
                  value: event.target.value
                });
              }}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Pick a winner (Only available to lottery manager account):</h4>
        <button onClick={this.onClickHandler}>Pick Winner</button>
        <hr />
        <h3 className={this.state.messageClass}>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
