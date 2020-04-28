import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    pageIndex: 0
  }

  renderSushis = sushisArr => {
    sushisArr.map(sushi => <Sushi sushi={sushi} handleOnClick={ () => this.props.eatSushi(sushi) } eaten={this.props.checkEaten(sushi.id)}/>)
  }

  nextPage = () => {
    this.setState({
      pageIndex: this.state.pageIndex + 4
    })
  }

  render() {
    const slicedSushis = this.props.sushis.slice(this.state.pageIndex, this.state.pageIndex + 4)
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushis(slicedSushis)
          }
          <MoreButton handleOnClick={this.nextPage}/>
        </div>
      </Fragment>
    )
  } 
}

export default SushiContainer