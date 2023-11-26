import React from 'react';
import "./footing.css";
import icon1 from './icons8-github-50.png'
import icon2 from './icons8-linkedin-50.png'


console.log(icon1);
console.log(icon2);

function Footer() {
  return (
    <div>
        <div className="line1">© Tomas Abrha,<span style={{ color: "#FFFFF"}}> 2023</span></div>
        <div className="inline2">
            <a href="" className="line2">Github <img src={icon1} /></a>
        </div>
        <div className="inline">
            <a href="" className="line3">Linkedin <img src={icon2} /></a>
        </div>

    </div>
  )
}

export default Footer