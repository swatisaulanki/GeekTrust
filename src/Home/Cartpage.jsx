import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cartpage = () => {
  const[data,setData] = useState([])
  console.log(data)
  const GetData = () => {
    axios
      .get(
        "http://localhost:8080/CartData"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Cartpage
