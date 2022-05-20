import React from 'react'

const CardInfo = ({ data }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>
          {data.quote}
        </h2>
      </div>
      <div className="card-body">
        <p>
          {data.author}
        </p>
      </div>
    </div>
  )
}

export default CardInfo