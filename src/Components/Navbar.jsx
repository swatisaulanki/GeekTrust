import React from 'react'
import {BsCart} from "react-icons/bs";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className={styles.Navbar} >
      <div >
        TeeRex Store
      </div>
      
      <div className={styles.Products}>
        <div>
            Products
        </div>
        
        <div className={styles.icon}>
        
            <BsCart className={styles.icons}/>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
