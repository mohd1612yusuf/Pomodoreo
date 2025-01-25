import React from 'react'
// import Navbar from './Routes/Navbar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Routes/Home'
// import About from './Routes/About'
// import Contact from './Routes/Contact'
// import User from './Routes/User'
// import TimerApp from './TimerApp'
import Timer from './Timer'
function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/User' element={<User/>}/>
        </Route>
      </Routes>
      </BrowserRouter> */}
      <Timer/>
      {/* <TimerApp/> */}
    </div>
  )
}

export default App


// import React from 'react'
// import Comp1 from './Comp1'
// function App() {
//   return (
//     <div>
//       <Comp1/>
//     </div>
//   )
// }

// export default App
