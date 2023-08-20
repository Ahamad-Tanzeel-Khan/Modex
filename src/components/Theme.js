import React, {useState} from 'react'

function Theme() {
    const handleRed = () => {
        document.body.style.backgroundColor = "red";
    }

    return (
        <div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleRed} id='Red'>Red Theme</button>
        </div>
    )
}

export default Theme
