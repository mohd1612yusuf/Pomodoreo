// import { useState } from 'react'
// function Controlled() {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [pass,setPass] = useState('');
//     const [condition,setCondition] = useState(false);
//     function handleSubmit(e){
//         e.preventDefault();
//         setCondition(true);
//     }
//   return (
//     <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder='username' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
    //     <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    //     <input type="password" placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/><br/><br/>
    //     <input type="submit" value="create"/>
    //     {condition && (<>
    //         <h1>My name is {name}</h1>
    //         <h1>My email is {email}</h1>
    //         <h1>My password is {pass}</h1>
    //         </>
    //     )}
    //   </form>
//     </div>
//   )
// }

// export default Controlled



// import React from 'react'
// import { useState } from 'react'
// function Controlled() {
//     const [data,setData]=useState({
//         name:"",
//         email:"",
//         pass:""
//     })
//     // const[condition,setCondition]=useState(false)
//     function handleSubmit(e){
//         e.preventDefault()
//         // setCondition(true)
//         localStorage.setItem("Data",JSON.stringify(data))
//         setData({
//           name:"",
//           email:"",
//           pass:""
//         })
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='username' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/><br/><br/>
//         <input type="email" placeholder='email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/><br/><br/>
//         <input type="password" placeholder='password' value={data.pass} onChange={(e)=>{setData({...data,pass:e.target.value})}}/><br/><br/>
//         <input type="submit" value="create"/>
//         {JSON.parse(localStorage.getItem("Data")).name}
//         {JSON.parse(localStorage.getItem("Data")).email}
//         {JSON.parse(localStorage.getItem("Data")).pass}
//         {/* {condition && data.name}</br>
//         {condition && data.name}</br>
//         {condition && data.name}</br> */}
//       </form>
//       <button onClick={()=>localStorage.removeItem("name")}>Remove name</button>
//       <button onClick={()=>localStorage.removeItem("email")}>Remove email</button>
//       <button onClick={()=>localStorage.removeItem("pass")}>Remove password</button>
//       <button onClick={()=>localStorage.clear()}>Clear</button>
//     </div>
//   )
// }

// export default Controlled



// LOCALSTORAGE -
// setItem("key","value")
// getItem("key")
// removeItem("key")
// clear()


import React, { useState } from 'react';
function Controlled() {
    const [data, setData] = useState({
        email: '',
        pass: '',
    });
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        pass: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleSignupSubmit(e) {
        e.preventDefault();
        localStorage.setItem('Data', JSON.stringify(data));
        setData({
            email: '',
            pass: '',
        });
        setIsSignedUp(true);
    }
    function handleLoginSubmit(e) {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('Data'));
        if (
            storedData &&
            storedData.email === loginData.email &&
            storedData.pass === loginData.pass
        ) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }
    
    return (
        <div>
            {!isSignedUp && !isLoggedIn && (
                <form onSubmit={handleSignupSubmit}>
                    <h2>Signup</h2>
                    <input type="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <br /><br />
                    <input type="password" placeholder="Enter password" value={data.pass} onChange={(e) => setData({ ...data, pass: e.target.value })}
                    />
                    <br /><br />
                    <input type="submit" value="Signup" />
                </form>
            )}
            {isSignedUp && !isLoggedIn && (
                <form onSubmit={handleLoginSubmit}>
                    <h2>Login</h2>
                    <input type="email" placeholder="Enter email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <br /><br />
                    <input type="password" placeholder="Enter password" value={loginData.pass} onChange={(e) =>setLoginData({ ...loginData, pass: e.target.value })
                        }
                    />
                    <br /><br />
                    <input type="submit" value="Login" />
                </form>
            )}
            {isLoggedIn && (
                <div>
                    <h2>Welcome, {JSON.parse(localStorage.getItem('Data')).email}!</h2>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
            )}
        </div>
    );
}
export default Controlled;