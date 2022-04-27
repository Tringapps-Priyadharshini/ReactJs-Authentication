import React from "react";
import tajmahal from  './tajmahalpic.jpg';
import wall from './greatwallofchina.jpg';
import { useParams } from "react-router-dom";
import './imgpath.css';
export default function Imagedisplay(){
    const {imgpath} = useParams();
    if(imgpath === 'taj mahal'){
    return (
        <div className="picdisplay">
    <img src = {tajmahal} alt="tajmahal" />
    </div>
    );
    }
    else{
        return (
            <div className="picdisplay">
            <img src = {wall} alt = "great wall of china" />
            </div>
        );
    }
}