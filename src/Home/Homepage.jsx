import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";
import Color from "../Colour/Color";
import Searchbar from "../Searchbar/Searchbar";
 export default function Homepage() {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState("");

  const GetData = () => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  useEffect(() => {
    GetData();
  }, []);

  // const handleCartClick=()=>{
  
  //   let product_data = JSON.parse(localStorage.getItem("data")) || [] ;
  //   product_data.push(data);
  //   localStorage.setItem("data",JSON.stringify(product_data))
  
  //   // console.log(data)
  //   // setData("cartArr",JSON.stringify(currentProduct))
  
  // //  dispatch(setCartData(currentProduct)).then((res)=>setData(res.data)).then(()=> navigate('/cart'))
  // }
  
  

  const handleAddcart =(item) =>{
    console.log(item)
let obj = {
  name:item.name,
  img:item.imageURL,
  price:item.price,
  type:item.type
}
console.log(obj)

    axios.post(" http://localhost:8080/CartData",obj)
    .then((res)=> {
      alert("successfully added");
      console.log(res.data);
          }).catch ((err)=> {
            console.log(err);
          })
  }

function handleSearching(ele){

    ele.preventDefault();
    let search = data.filter((ele) =>
      ele.name.toLowerCase().includes(temp.toLowerCase())
    );
    setTemp("");
    setData(search);
  }




  return (

    <>
    <Searchbar temp={temp} setTemp={setTemp} handleSearching={handleSearching}/>
    <div className={styles.parentBox}>
     <Color/>
      <div className={styles.homecontain}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} className={styles.homecontains}>
                {/* <p>{item.color}</p> */}
                <p>{item.name}</p>

                <img src={item.imageURL} />

                <div className={styles.priceflex}>
                  <p> Rs {item.price}</p>
                  <button onClick={()=>{handleAddcart(item)}}>Add to Cart</button>
                </div>

                {/* <p>{item.quantity}</p> */}
                {/* <p>{item.type}</p> */}
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

// export default Homepage;
