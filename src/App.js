import React, { Component } from "react";
import AppContent from "./components/AppContent";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      address: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  getAddress(e) {
    const query = `https://viacep.com.br/ws/${this.state.zipcode}/json`;

    fetch(query)
      .then(response => response.json())
      .then(result =>
        this.setState({
          address: {
            street: result.logradouro,
            neighborhood: result.bairro,
            city: result.localidade,
            state: result.uf,
            zipcode: result.cep
          }
        })
      )
      .catch(err => console.error(err));

    e.preventDefault();
  }

  handleSearch(e) {
    this.setState({ zipcode: e.target.value });
  }

  closeInfo(e) {
    this.setState({ address: null });
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        closeInfo={this.closeInfo}
        getAddress={this.getAddress}
      />
    );
  }
}
