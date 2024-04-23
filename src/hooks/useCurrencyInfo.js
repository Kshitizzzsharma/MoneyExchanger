import { useState,useEffect } from "react";


function useCurrencyInfo(){
        const currency ='inr'
        const [data,setData]= useState({})
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=> res.json)
            
            .then((res)=> console.log(res.toString))
            // setData(res[currency]))
            
            console.log(data);
        }, [currency])
};

 export default useCurrencyInfo ;

 