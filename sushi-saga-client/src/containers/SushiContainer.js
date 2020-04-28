import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux'


const SushiContainer = ({sushis}) => {
 
const [limit, setLimit] = useState(5);
const [initialSushi, setInitialSushi] = useState(0);
const sendMore = (number) => {

  setLimit(limit + number)
  setInitialSushi(initialSushi + number)
}

  return (
    <Fragment>
      <div className="belt">
        {
            sushis.slice(initialSushi, limit).map(sushi => <Sushi sushi={sushi}/> )
        }
        <MoreButton sendMore={sendMore} />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state =>{
  return {
    sushis: state.sushis
  }
}

export default connect(mapStateToProps) (SushiContainer)