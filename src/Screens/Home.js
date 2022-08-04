import React, { useEffect,useState } from "react";
import ADS from "../Component/ADS";
import Header from "../Component/Header";
import Pricing from "../Component/Pricing";
import { useDispatch } from "react-redux";
import { dataAction } from "./store/store";
import { storage } from "../firbase";
import { ref, listAll, getDownloadURL } from "firebase/storage"
const Home = () => {
  const AdImageRef = ref(storage, "images/")
  const dispatch = useDispatch();
  const[ AdImageList,setAdImageList] = useState([]);
  const [dataCode,setDataCode] = useState()
  const [error,setError] = useState({
    isError : false,
    errorMessage : ""
  })
  const fetchData = async() => {
      try {
        const response = await fetch("https://cart-3cc76-default-rtdb.europe-west1.firebasedatabase.app/prices.json")
        if(!response){
            throw new Error("somthing is wrong")
        }
        const data = await response.json()
     
        setDataCode(data)
        dispatch(dataAction.setData(data))
      }catch(err){
          setError({
            isError: true,
            errorMessage: err.message
          })
      }
      
  }
  
  useEffect(() => 
  {
    listAll(AdImageRef).then(response => {
      response.items.forEach(item => {
          getDownloadURL(item).then(url => {
            setAdImageList(prev => [...prev, url])
          })
      })
    })
    fetchData()
  }
  ,[])  
  return (
    <React.Fragment>
      <Header />
      {error.isError ? <div className="home-error"><p >{error.errorMessage}</p></div>:
      <div className="home">
       <ADS urls = {AdImageList}/>
        <hr />
        <section id="about">
          <h3>
            Hello. <br />
            you can order your mobile services now by click on button
            <span className="">
              na2i l servise yali badak yeah 7faz l code foot 3ala l shop 3abi
              talab ba3d 2h bekoun meshi l 7al
            </span>
          </h3>
        </section>
        <hr />
        { !dataCode ?  <h1>waiting</h1> : <section id="pricing">
          <h1>Touch</h1>
          <Pricing data = {dataCode.ALFA}/>
          <hr />
          <h1>ALFA</h1>
          <Pricing data = {dataCode.MTC} />
        </section>}
        <hr />
        <section id="contact">
          <p>
            {" "}
            if you have any question or a problem contact me via the button
            below
          </p>
          <a href="mailto:alinjcs@gmail.com">
            <button type="button" className="btn btn-outline-light mb-4">
              Contact
            </button>
          </a>
        </section>
        <footer id="footer">
          <a href="#">
            <i className="social-icons fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="social-icons fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="social-icons fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="social-icons fa-solid fa-envelope"></i>
          </a>
          <p>© Copyright 2022 Monzer</p>
        </footer>
      </div>}
    </React.Fragment>
  );
};

export default Home;
