import React from "react";

import Search from "./Search";
import AddressInfo from "./AddressInfo";

const AppContent = ({ address, handleSearch, getAddress, closeInfo }) => (
  <div className="app">
    <Search handleSearch={handleSearch} getAddress={getAddress} />
    {!!address && <AddressInfo address={address} closeInfo={closeInfo} />}
  </div>
);

export default AppContent;
