import cl from "./Input.module.css";

const Input = ({
  title,
  placeholder,
  type = "text",
  classes = "col-md-6 mb-3",
  isError,
  onType,
  errorMessage
}) => {
 

  return (
    <div className={`${classes} ${isError && cl.error}`}>
      <label  htmlFor="validationDefault01">
        {title}
      </label>

      <input
        onChange={(event) => onType(event)}
        type={type}
        className="form-control"
        id="validationDefault01"
        placeholder={placeholder}
      />
      {isError && <label>{errorMessage} </label>}
    </div>
  );
};

export default Input;
