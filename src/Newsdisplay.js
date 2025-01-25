import React from 'react'

function Newsdisplay({title,description,url,image}) {
  return (
    <div>
      <img src={image} alt="News" style={{width:"100px" ,height:"100px"}}/>
      <h2>{title?title.slice(0,40):"No title"}</h2>
      <p>{description?description.slice(0,300):"No description"}</p>
      <a href="{url}" target='_blank' rel='noopener nonforever'>Read More</a>
    </div>
  )
}

export default Newsdisplay
