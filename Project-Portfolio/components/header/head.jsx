import React from 'react'
import './headstyle.css'

function Head() {
  return (
    <div>
        <div className="r-location">
            <span className="rubrik">Tomas Abrha</span>
        </div>
            
        <div style={{ marginLeft : '5vw', marginTop : '-6vw'}}>
            <span className="rubrik2">Webbutvecklare.</span>
        </div>

        <div style={{ marginLeft : '5vw', marginTop : '10vw'}}>
            <span className="introduction">Introduktion</span>
        </div>

        <div className="int-style">
            <span className="introduction-txt">
            Jag är Tomas, Frontend Utvecklare från Stockholm som är
            väldigt engagerad när det kommer till byggen av hemsidor. Vare sig det gäller
            förplanering i Figma eller under det faktiska programmerandet
            där jag är kunnig inom bland annat HTML, CSS, Javascript, Python och PHP.
            Jag brukar mestadels nyttja mig utav frameworket React.JS, mer specifikt Vite
            när jag skapar mina sidor, eller Next.js beroende på projekt.

            </span>
        </div>

        <div className="blocklayout"></div>
        <div className="blocklayout2"></div>
        <div className="blocklayout3"></div>

    </div>
  )
}

export default Head