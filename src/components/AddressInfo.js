import React from "react";

const AddressInfo = ({ address, closeInfo }) => (
  <div className="address-info">
    <button className="btn-close" onClick={closeInfo}>
      x
    </button>
    <h2>{address.street}</h2>
    <p>{address.neighborhood}</p>
    <p>{`${address.city} - ${address.state}`}</p>
    <span>{address.zipcode}</span>
  </div>
);

export default AddressInfo;
