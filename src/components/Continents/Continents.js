import React from "react"
import "./Continents.css"

const Continents = (props) =>{
    const {continent, changeActive} = props
    const {id,name, isSelect, continentId} = continent

    const changeCheck = () =>{
        changeActive(id, isSelect, continentId)
    }

    return(
        <>
            <div className="check-box">
                <input className="input" type="checkbox" id={id} checked={isSelect} onChange={changeCheck}/>
                <label htmlFor={id} className="label" >{name}</label>
            </div>
        </>
    )
}

export default Continents