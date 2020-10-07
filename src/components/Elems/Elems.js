import React from 'react';
import './Elems.css'

export default function Elems(props) {
    return(
        <div className='style'>
        <div className='text'>{props.text}</div>
        </div>
    )
}