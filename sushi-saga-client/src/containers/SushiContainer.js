import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
        props.sushis.map(sushi => {return <Sushi  eaten = {props.eaten} sushi = {sushi}/>} )
       
        }
        <MoreButton nextSushi ={props.nextSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer