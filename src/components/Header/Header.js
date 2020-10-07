import React from 'react'
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className='line'>
                    <h1 className='text'>ToDo</h1>
                </header>
            </div>
        )
    }
}