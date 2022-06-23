import React from "react"
import "./Countries.css"

const Countries = (props) =>{

    const {names, isActive} = props.country

    return(
        <>
            {names.map((each) =>(
                <div className="country-check">
                    <input className="input" disabled={isActive} type="checkbox" id={each}/>
                    <label className="label-country" htmlFor={each}>{each}</label>
                </div>
            ))}
        </>
    )
}

export default Countries