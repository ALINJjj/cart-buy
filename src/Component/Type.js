const Type = ({theref}) =>{
        return (
            <div className="col-md-6 mb-3">
            <label htmlFor="validationDefaultUsername">SIM Type:</label>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option value="1">MTC</option>
                <option value="2">ALFA</option>
              </select>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                ref={theref}
              />
            </div>
          </div>
        )
}

export default Type;