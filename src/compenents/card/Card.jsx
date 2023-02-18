import React from 'react'
import './Card.css'
import {data} from '../../helper/data'

const Card = () => {
  console.log(data);

  return (
    <div className='cont'>
    <div className='container'>
      {
      data.map((item) =>{
        const {id,title,desc,image} =item
        return (
          <div className='card'>
          <h1 className='title'>{title}</h1>
          <img src={image} height="350px" alt=""></img>
          <p>{desc} </p>
          </div>  
        )
      }

      )}
    </div>
    
    </div>
  )
}

export default Card