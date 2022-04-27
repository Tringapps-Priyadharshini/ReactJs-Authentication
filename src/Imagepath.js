import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import './imgpath.css';

export default function Imagepath(){
    return(
        <div className='picstitle'>
        <ul>
            <li className='picturetitle'><Link to = "taj mahal" id="pictext">Taj Mahal</Link></li>
            <li className='picturetitle'><Link to = "great wall of china" id="pictext">Great wall of china</Link></li>
        </ul><br/>
        <br/><br/><br/><br/>
        <Outlet/>
        </div>
    )
}




