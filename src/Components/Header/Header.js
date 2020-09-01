import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <a className='logo' href="/home">Programming-<span>Pathshala</span></a>
                <a className='links' href="/home">Home</a>
                <a className='links' href="/courses">Courses</a>
                <a className='links'  href="/cart">Review Cart</a>
                <a className='links' href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;