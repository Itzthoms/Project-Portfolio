import React from 'react'
import './workings.css'

function Works() {
  return (
    <div>

        <div className="job1">
            <div className="job1style">Klackenbergs Böcker & Papper</div>
            <span style={{ paddingLeft : "2vw", color : "#C8C8C8"}}>Maj 2018</span>
        </div>

        <div className="job2">
            <div className="job2style">Gröna Lunds Tivoli<span style={{ color : "#C8C8C8", marginInline : "20px"}}>- Entrévärd</span></div>
            <span style={{ paddingLeft : "2vw", color : "#C8C8C8"}}>Aug 2022 - Jun 2023</span>
        </div>

        <div className="job3">
            <div className="job3style">Gröna Lunds Tivoli<span style={{ color : "#C8C8C8", marginInline : "20px"}}>- Attraktionsvärd</span></div>
            <span style={{ paddingLeft : "2vw", color : "#C8C8C8"}}>Jun 2023 - Aug 2023 2023</span>
        </div>

        <div className="job4">
            <div className="job4style">Kjell & Company</div>
            <span style={{ paddingLeft : "2vw", color : "#C8C8C8"}}>Aug 2023 - Nuvarande</span>
        </div>
        

    </div>
  )
}

export default Works