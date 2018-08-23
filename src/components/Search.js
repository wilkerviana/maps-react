import React from "react";
import PropTypes from "prop-types";
import Actions from "./Actions";

const Search = ({ handleSearch, getAddress }) => (
  <div>
    <h1>Consulta de endereco</h1>
    <form onSubmit={getAddress}>
      <legend>Consultar</legend>
      <label htmlFor="formCep">CEP</label>
      <input
        type="text"
        placeholder="00000-000"
        id="formCep"
        onChange={handleSearch}
      />
      <Actions />
    </form>
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  getAddress: PropTypes.func.isRequired
};

export default Search;
