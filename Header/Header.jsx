import React, { useState } from 'react'
import './Header.css'
const Header = () => {
  const foods=["Uffata","Midhaan","Nyata","Dhugatii","Meeshaalee","Kuduraalee","Buna","Xaa'oo","fi Mana"]
  const[list,setList]=useState("");
  function listOfFood(){
    document.querySelector('pre').innerHTML=foods;
    setList(list)
  }
  return (
    <div className='header'>
      <div className="header-contents">
        
        <button onClick={listOfFood}> Products</button>
        <pre></pre>
      </div>
    </div>
  )
}

export default Header