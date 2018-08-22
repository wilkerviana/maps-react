import React from "react";
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

export default Search;
