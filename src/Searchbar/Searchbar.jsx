import React from 'react'
import styles from "./Searchbar.module.css";
import {BsSearch} from "react-icons/bs"

export default function Searchbar ({temp, setTemp, handleSearching}){
  return (
    <>
    <form className={styles.searchcontain} onSubmit={handleSearching}>
      <div className={styles.search}>
        <input placeholder=' Search for products' className={styles.inputout}  value={temp}
          onChange={(e) => setTemp(e.target.value)}/>
       <button> <BsSearch className={styles.iconsearch}/>
       </button>
       
      </div>
    </form>
    </>
  )
}

// export default Searchbar
