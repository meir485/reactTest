import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"



export default function Menu() {
    return (
        <div className='row'>

            <div className='col-4'>
                  <Link to = '/'>home</Link>
            </div>
            <div className='col-4'>
                  <Link to = '/first'>first</Link>
            </div>
            <div className='col-4'>
                  <Link to = '/second'>second</Link>
            </div>
            
        </div>
    )
}
