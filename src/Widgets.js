import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='Widgets__article'>
            <div className='Widgets__articleLeft'>
                <FiberManualRecordIcon />

            </div>
            <div className='Widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    )



    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Farabi is back")}
        </div>


    )
}

export default Widgets
