import React, { Fragment } from 'react'

const Sushi = (props) => {
   const {id, name, imgUrl, price, sushi, consumedSushi, budget} = props
  console.log(sushi)

  return (
  
 <div className="sushi" >
      <div className="plate" 
           onClick={() => props.eatSushi(sushi, price)}
         
           
           >
        { 
          /* Tell me if this sushi has been eaten! */ 

        false ? null
          :
          <img sushi={sushi} src={imgUrl} width="100%" />}
        
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
   )
}

export default Sushi