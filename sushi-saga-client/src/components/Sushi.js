import React, { Fragment } from 'react'
import { connect } from 'react-redux'
const Sushi = ({sushi, sushiSelected, selectedSushi, amount, amountSpent}) => {


  const handleSelection = () =>{
   amount <= 0 ? null : selectedSushi(sushi)
  }

  console.log(sushi.img_url)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleSelection}>
        { sushiSelected.includes(sushi)
           ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    sushiSelected: state.sushiSelected,
    amount: state.amount,
    amountSpent: state.amountSpent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedSushi: sushi => dispatch({type: "SET_SELECTED_SUSHI", payload: {sushi:sushi}})
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Sushi)