const Input = ({ title, placeholder, theref ,type="text",classes="col-md-6 mb-3"}) => {
  return (
    <div className={classes}>
      <label htmlFor="validationDefault01">{title}</label>
      <input
        ref={theref}
        type={type}
        className="form-control"
        id="validationDefault01"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
