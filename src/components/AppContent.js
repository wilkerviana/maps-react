import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import AddressInfo from "./AddressInfo";
import MapContainer from "./MapContainer";

const AppContent = ({
  address,
  location,
  handleSearch,
  getAddress,
  closeInfo
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} getAddress={getAddress} />
    <section className="address-info">
      {!!address && <AddressInfo address={address} closeInfo={closeInfo} />}
      {!!address && <MapContainer address={address} location={location} />}
    </section>
  </div>
);

AppContent.propTypes = {
  address: PropTypes.object,
  handleSearch: PropTypes.func,
  getAddress: PropTypes.func,
  closeInfo: PropTypes.func
};

export default AppContent;
