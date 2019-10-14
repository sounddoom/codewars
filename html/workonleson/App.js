import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let Header = p => 
<header>
    Header
</header>

let Alert = p =>
<div className={`alert alert-${p.type}`} role="alert">
    {p.children}
</div>

let MenuItem = (p =>
<li className="nav-item ">
   <a className="nav-link" href={p.href}>
        {p.children}
   </a>
</li>)

let MyImg = p =>
<div className='imgContainer'>
    <img src={p.src} />
</div>


let App = p => 
<div>
    <Header />
    <main>
        Main
        <Alert type="info">
            Some info
        </Alert>
        <Alert type="danger">
            Some info
        </Alert>
        <ul>
        <MenuItem href="/about/">About</MenuItem>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/contacts">Contact</MenuItem>
        <MyImg src="favicon.ico" />
        </ul>
    </main>
    <footer>
        Footer
    </footer>
</div>
export default App;
