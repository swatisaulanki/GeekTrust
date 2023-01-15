import React from 'react'
import styles from "./Color.module.css"
const Color = () => {

  const handleChange = (e) => {
    console.log(e);
  }
  return (
    <div className={styles.colormode}>
      <div className={styles.colorhead} >
        <h4>Color</h4>
        <div  className={styles.checkbox}>      
          <input type="checkbox" value={{color:"red"}} onChange={handleChange} />
          <h5>red</h5>
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Blue</h5>  
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Green</h5>  
        </div>

        

      </div>



{/* Gender */}

      <div className={styles.colorhead}  >
        <h4>Gender</h4>
        <div  className={styles.checkbox}>      
          <input type="checkbox" onChange={handleChange}/>
          <h5>Men</h5>
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Women</h5>  
        </div>

       
      </div>

      {/* price */}


      <div className={styles.colorhead}  >
        <h4>Price</h4>
        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>0-Rs250</h5>
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>251-450</h5>  
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>450</h5>  
        </div>
      </div>

      {/* type */}

      <div className={styles.colorhead} >
        <h4>Type</h4>
        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Polo</h5>
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Hoodie</h5>  
        </div>

        <div  className={styles.checkbox}>      
          <input type="checkbox"/>
          <h5>Basic</h5>  
        </div>

        

      </div>
    </div>
  )
}

export default Color
