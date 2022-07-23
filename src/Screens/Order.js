import classes from "./Order.module.css";
import { useRef, useState } from "react";
import Input from "../Component/Input";
import Type from "../Component/Type";
import SmallTable from "../Component/SmallTable";
import CheckBox from "../Component/CheckBox";
import {useForm} from "react-hook-form"
const Order = () => {
  const firstNameRef = useRef();
  const codeRef = useRef();
  const lastNameRef = useRef();
  const desNumberRef = useRef();
  const messageRef = useRef();
  const simTypeRef = useRef();   
  const checkRef = useRef();
  const formRef = useRef();
  const {reset}  = useForm()

  const submithandler = (event) => {
    event.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const code = codeRef.current.value;
    const simType = simTypeRef.current.value;
    const message = messageRef.current.value;
    const desNumber = desNumberRef.current.value;
    desNumberRef.current.value = ""
    console.log(firstname);
    console.log(lastname);
    console.log(code);
    console.log(simType);
    console.log(message);
    console.log(desNumber);
    const myform = document.getElementById("my-form")
    console.log(myform)
  };
  return (
    <div className={classes.form} id="my-form" ref={formRef}>
      <form onSubmit={submithandler}>
        <div className="form-row">
          <Input
            title="First Name:"
            placeholder="Enter your first name"
            theref={firstNameRef}
          />
          <Input title="last Name:" placeholder="Enter your last name" theref={lastNameRef}/>
       
          <Input
            title="Destination Number:"
            placeholder="your phone number"
            type="tel"
            theref={desNumberRef}
          />
          <Type theref={simTypeRef}/>
          <Input title="Message:" placeholder="enter your messge to me" theref={messageRef}/>

         <Input title="Code:" classes="col-2 mb-3" theref={codeRef}/>
          
          <SmallTable marke = "touch" price="5"/>
        </div>
        <CheckBox text ="Agree to terms and conditions" theref={checkRef}/>
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
