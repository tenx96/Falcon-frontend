import React from "react";
import "./style.css"

export const ROUTE_LINEUP = "/lineup"

export default function Lineup() {
  return (
    <div className='lineup'>
      <img className='img-fluid' src="https://source.unsplash.com/1600x900/?music,edm" alt="dummy img" />
      <div className="container-fluid px-0" style={{ overflowX: 'hidden' }}>
        <div className="row">
          <div className="col-md-5 p-0">
            <img className='img-fluid' style={{ height: '100%', border: '2px solid white' }} width='100%' src="https://source.unsplash.com/400x300/?music,edm" alt="falcon" />
          </div>
          <div className="col-md-7 p-0">
            <img className='img-fluid' style={{ height: '100%', border: '2px solid white' }} width='100%' src="https://source.unsplash.com/600x300/?music,edm" alt="falcon" />
          </div>
          <div className="col-md-4 p-0 position-relative">
            <h1 className='centered'>Something</h1>
            <img className='img-fluid' style={{ height: '100%', border: '2px solid white' }} width='100%' src="https://source.unsplash.com/300x300/?music" alt="falcon" />
          </div>
          <div className="col-md-4 p-0 position-relative">
            <h1 className='centered'>Something</h1>
            <img className='img-fluid' style={{ height: '100%', border: '2px solid white' }} width='100%' src="https://source.unsplash.com/300x300/?edm" alt="falcon" />
          </div>
          <div className="col-md-4 p-0 position-relative">
            <h1 className='centered'>Something</h1>
            <img className='img-fluid' style={{ height: '100%', border: '2px solid white' }} width='100%' src="https://source.unsplash.com/300x300/?singer" alt="falcon" />
          </div>
        </div>
      </div>


    </div>
  );
}
