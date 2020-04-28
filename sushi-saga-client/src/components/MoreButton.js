import React from 'react'

const MoreButton = ({setLimit, sendMore}) => {
    return <button onClick={() => sendMore(5)}>
            More sushi!
          </button>
}

export default MoreButton