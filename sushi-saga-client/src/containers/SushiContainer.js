import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
 
  const sushi = props.sushiData.map(sushi => <Sushi budget={props.budget} consumedSushi={props.consumedSushi} eatSushi={props.eatSushi} id={sushi.id} sushi={sushi} name={sushi.name} imgUrl={sushi.img_url} price={sushi.price}/>)
  
  return (
    
    <Fragment>
      <div className="belt">
        
        
        {sushi}
        <MoreButton onClick={props.onClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer