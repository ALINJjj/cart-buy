const CheckBox = ({text}) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck2"
          required
        />
        <label className="form-check-label" htmlFor="invalidCheck2">
         {text}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
