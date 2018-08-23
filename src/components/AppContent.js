import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import AddressInfo from "./AddressInfo";

const AppContent = ({ address, handleSearch, getAddress, closeInfo }) => (
  <div className="app">
    <Search handleSearch={handleSearch} getAddress={getAddress} />
    {!!address && <AddressInfo address={address} closeInfo={closeInfo} />}
  </div>
);

AppContent.propTypes = {
  address: PropTypes.object,
  handleSearch: PropTypes.func,
  getAddress: PropTypes.func,
  closeInfo: PropTypes.func
};

export default AppContent;
