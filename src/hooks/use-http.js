import { useCallback, useState } from "react";

const Usehttp = () => {
  const [isLoading, setIsloading] = useState(false);
  const [errorState, setErrorState] = useState('');

  const sendRequest = (async (RequestConfig, applyData) => {
    setIsloading(true);
    setErrorState(null);
    
    try {
        const response = await fetch(RequestConfig.url, {
            method: RequestConfig.method ? RequestConfig.method : "GET",
            body: RequestConfig.data ? JSON.stringify(RequestConfig.data) : null,
            headers: RequestConfig.headers ? RequestConfig.headers : {},
          });
        
        if(!response.ok) {
            throw new Error('Request faild');
        }  
        
        const data = await response.json()
        applyData(data)
    }catch(error){
        setErrorState(error.message || 'somthing is wrong');
    }
    setIsloading(false);
  });

  return {
    isLoading,
    errorState,
    sendRequest
  }
};

export default Usehttp;
