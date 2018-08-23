import React, { Component } from "react";
import AppContent from "./components/AppContent";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      address: null,
      location: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
    this.getMapAddress = this.getMapAddress.bind(this);
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
      .then(() => this.getMapAddress())
      .catch(err => console.error(err));

    e.preventDefault();
  }

  getMapAddress() {
    const mapParam = this.state.address.street.replace(/\s/g, "+");
    const map = `http://maps.google.com/maps/api/geocode/json?address=${mapParam}`;
    fetch(map)
      .then(response => response.json())
      .then(address =>
        setTimeout(() => {
          address.results.map(address => {
            return this.setState({
              location: {
                lat: address.geometry.location.lat,
                lng: address.geometry.location.lng
              }
            });
          });
        }, 1000)
      );
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
        getMapAddress={this.getMapAddress}
        getAddress={this.getAddress}
      />
    );
  }
}
