import React from "react";

function StarbucksInput({name, value, onChange, error}){
    return(
        <div>
            <label htmlFor="input">{name}</label>
            <input type="text" id="input" name={name} value={value || ""} onChange={(evt)=>{onChange(evt.target.value)}}/>
            <p>{error && error}</p>
        </div>
    )
}

export default StarbucksInput;