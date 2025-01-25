import { useState } from "react"
import React from 'react'

function Darkmode() {
    const [theme, setTheme] = useState('light');
    return (
        <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
            <button style={{ background: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === "light" ? "Dark" : "Light"}</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    )
}

export default Darkmode



// {
//     type: 'h1'
//     props:{
//         children:'Count :'
//     }
//     type: 'button'
//     props:{
//         children:'Increment count'
//         onClick:count+1
//     }
//     type:'h1'
//     title: 'Number header'
//     props:{
//         children:'Number'
//     }
//     type: 'button'
//     props:{
//         children:'Increment number'
//         onClick:number-1
//     }
// }



// import { useState } from "react"
// import React from 'react'

// function Darkmode() {
//     const [theme, setTheme] = useState('light');
//     return (
//         <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
//             <button style={{ background: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === "light" ? "Dark" : "Light"}</button>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//         </div>
//     )
// }

// export default Darkmode