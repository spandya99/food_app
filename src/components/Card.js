import React from 'react'

export default function Card() {
  return (
    <>
      <div className="card mt-5" style={{"width": "18rem"}}>
      <img src="https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg" className="card-img-top " alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<div className='container'>
<select className='m-2 h-100 bg-success rounded '>
    {
        Array.from(Array(6),(e,i)=>(
           <option key={i+1} value={i+1}>{i+1}</option>
        )
           
        )    
    }
</select>
<select className='m-2 h-100 bg-success rounded '>
   <option >half</option>
    <option >full</option>
</select>
</div>
 
  </div>
</div>
    </>
  )
}
