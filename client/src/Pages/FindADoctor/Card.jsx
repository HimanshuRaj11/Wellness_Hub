import React from 'react'


export default function Card({items}) {
  return (
    <div className='Card'>
      <div className="cardBody">
        <img src={`./public/images/about.png`} alt="" className="img" />
        <div className="details">
          <span className="name">{items.name}</span>
          <span className="speciliest">{items.speciliest}</span>
          <span className="fee">fee</span>
          <div className="cardBtn">
          <span className="getInTouch"> <a href={`/doctor/${items._id}`}> Get In Touch</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}
