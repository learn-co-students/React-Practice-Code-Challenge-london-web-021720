import React, { Fragment } from 'react'

const Table = (props) => {
  console.log(props)
  const {budget, consumedSushi} = props

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  // const sushiPrice = props.sushiData.map(sushi => sushi.price).reduce((a, b) => a + b, 0)
  // console.log(sushiPrice)
  return (
    <Fragment>
      
       <h1 className="remaining">{budget > 0 ?
        
        `You have: $${budget} remaining!` :
        "You have no money left!"}</h1>
      {/* disable button to buy sushi */}
      
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(consumedSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table