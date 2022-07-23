import { useState } from "react";
const Type = ({ onChoise, onType, value }) => {
  return (
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefaultUsername">SIM Type:</label>
      <div className="input-group">
        <div className="input-group-prepend"></div>
        <select
          onChange={(event) => onChoise(event)}
          className="custom-select mr-sm-2"
          id="inlineFormCustomSelect"
        >
          <option value="">select</option>
          <option value="MTC">MTC</option>
          <option value="ALFA">ALFA</option>
        </select>
        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend2"
          onChange={(event) => onType(event)}
          value={value}
        />
      </div>
    </div>
  );
};

export default Type;
