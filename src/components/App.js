import React from 'react';
import Header from './Header/Header.js';
import Canvas from './Canvas/Canvas.js';

export default function App(){
    return(
        <div className='flex'>
        <Header />
        <Canvas />
        </div>
    )
}