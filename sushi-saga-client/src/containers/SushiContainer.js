import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(sushi => <Sushi key={sushi.id} addToEaten={props.addToEaten} eaten={props.eaten} sushi={sushi} />) }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer