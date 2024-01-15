import React from 'react'
import '../style/Header.css'
import { BiSearchAlt2 } from "react-icons/bi";

let arr = ["Popular", "Theatre", "Drama", "Comedy"]

const Header = ({ getData, input, setInput, searchMovie }) => {

    return (
        <div className="header">
            <ul className='header__options'>
                {
                    arr.map((value, pos) => {
                        return (
                            <li><a key={pos} name={value} onClick={(e) => { getData(e.target.name) }}>{value}</a></li>
                        )
                    })
                }
            </ul>
            <div className="header__search">
                <input type="text" placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={searchMovie}><BiSearchAlt2 /></button>
            </div>
        </div>
    )
}

export default Header