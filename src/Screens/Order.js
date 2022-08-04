import classes from "./Order.module.css";
import { useEffect, useState } from "react";
import Input from "../Component/Input";
import Type from "../Component/Type";
import SmallTable from "../Component/SmallTable";
import CheckBox from "../Component/CheckBox";
import { Link,useNavigate } from "react-router-dom";
import CheckingBar from "../Component/CheckingBar";
import usehttp from "../hooks/use-http";
import { useSelector } from "react-redux";

const Order = () => {
  const navigate = useNavigate();
  const smallData = useSelector((state) => state.data);
  let noError;
  const [data, setData] = useState({
    firstname: "",
    lastName: "",
    desNumber: "",
    simType: "",
    message: "",
    code: "",
  });
  const [errors, setErrors] = useState({
    fname: false,
    lName: false,
    dNumber: false,
    sim: false,
    code: false,
  });
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableDta] = useState({
    price: null,
    service: null,
  });
  const { isLoading, errorState, sendRequest } = usehttp();

  const choisehandler = (event) => {
    const sim = event.target.value;
    setData({
      ...data,
      simType: sim,
    });
  };

  const simTexthandler = (event) => {
    const sim = event.target.value;
    setData({
      ...data,
      simType: sim,
    });
  };
  const StringsTest = (word) => {
    return word.trim().length >= 3;
  };

  const phoneTest = (number) => {
    return number.trim().length === 8;
  };

  const simTest = (sim) => {
    return (
      sim.trim().toLowerCase() === "mtc" || sim.trim().toLowerCase() === "alfa"
    );
  };

  const codeTest = (code) => {
    return code.trim().length === 3;
  };

  const nameHandler = (event) => {
    setErrors({
      ...errors,
      fname: false,
    });
    const name = event.target.value;
    setData({
      ...data,
      firstname: name,
    });
  };

  const lnameHandler = (event) => {
    setErrors({
      ...errors,
      lName: false,
    });
    const lastname = event.target.value;
    setData({
      ...data,
      lastName: lastname,
    });
  };

  const desNumberHandler = (event) => {
    setErrors({
      ...errors,
      dNumber: false,
    });
    const number = event.target.value;
    setData({
      ...data,
      desNumber: number,
    });
  };

  const codeHandler = (event) => {
    setErrors({
      ...errors,
      code: false,
    });
    const code = event.target.value;
    setData({
      ...data,
      code: code,
    });
    const enterdCode = code.trim().toString();
    let specificData;
    if (code.trim().length === 3) {
      const firstChar = enterdCode.charAt(0);

      if (firstChar.toLowerCase() === "a") {
        specificData = smallData.ALFA;
      } else if (firstChar.toLowerCase() === "m") {
        specificData = smallData.MTC;
      } else {
        setErrors({
          ...errors,
          code: true,
        });
        return;
      }
      const finalData = specificData.find((item) => item.code === enterdCode);
      if (finalData) {
        setTableDta({
          service: finalData.servise,
          price: finalData.price,
        });
      } else {
        setErrors({
          ...errors,
          code: true,
        });
        return;
      }
      setShowTable(true);
    } else {
      setShowTable(false);
      setErrors({
        ...errors,
        code: false,
      });
    }
  };

  const messageHandler = (event) => {
    const message = event.target.value;
    setData({
      ...data,
      message: message,
    });
  };
  const submithandler = async (event) => {
    event.preventDefault();
    const dataErrors = {
      fname: !StringsTest(data.firstname),
      lName: !StringsTest(data.lastName),
      dNumber: !phoneTest(data.desNumber),
      sim: !simTest(data.simType),
      code: !codeTest(data.code),
    };
    setErrors(dataErrors);
    noError =
      !dataErrors.fname &&
      !dataErrors.lName &&
      !dataErrors.dNumber &&
      !dataErrors.sim &&
      !dataErrors.code;

    if (noError) {
      const requestConfig = {
        url: "https://cart-3cc76-default-rtdb.europe-west1.firebasedatabase.app/order.json",
        data: data,
        method: "POST",
      };

      sendRequest(requestConfig, (data) => console.log("data"));
      setTimeout(()=>{
        navigate('/');
      },1000);
    } else {
      return;
    }
    setData({
      firstname: "",
      lastName: "",
      desNumber: "",
      simType: "",
      message: "",
      code: "",
    });
  };
  return (
    <div className={classes.form} id="my-form">
      {isLoading && <CheckingBar />}
      <form onSubmit={submithandler}>
        <div className="form-row">
          <Input
            val={data.firstname}
            onType={nameHandler}
            title="First Name:"
            placeholder="Enter your first name"
            isError={errors.fname}
            errorMessage={errors.fname ? "Enter a valid Name" : ""}
          />
          <Input
            val={data.lastName}
            onType={lnameHandler}
            title="last Name:"
            placeholder="Enter your last name"
            isError={errors.lName}
            errorMessage={errors.lName ? "Enter a valid Name" : ""}
          />

          <Input
            val={data.desNumber}
            onType={desNumberHandler}
            title="Destination Number:"
            placeholder="your phone number"
            type="tel"
            isError={errors.dNumber}
            errorMessage={errors.dNumber ? "Not Lebanese number" : ""}
          />
          <Type
            onChoise={choisehandler}
            onType={simTexthandler}
            value={data.simType}
            isError={errors.sim}
            errorMessage="ALFA or MTC"
          />
          <Input
            val={data.message}
            onType={messageHandler}
            title="Message:"
            placeholder="enter your messge to me"
          />

          <Input
            val={data.code}
            onType={codeHandler}
            title="Code:"
            classes="col-2 mb-3"
            isError={errors.code}
            errorMessage={errors.code ? "Invalid" : ""}
          />

          {showTable && (
            <SmallTable marke={tableData.service} price={tableData.price} />
          )}
        </div>
        <CheckBox text="A you sure ? " />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-light btn-lg mt-3">
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
