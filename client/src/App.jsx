import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./component/Signup.jsx";
import Signin from "./component/Signin.jsx";
import Appbar from './component/Appbar.jsx';
import Landing from './component/Landing.jsx';
import { useState, useEffect } from 'react';
function App() {

  const [userEmail,setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data){
            if(data.username){
                setUserEmail(data.username);
            }
        }
        function callback1(res){
            res.json().then(callback2)
        }
        
        fetch("http://localhost:3000/user/me",{
            method: "GET",
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    },[])

  return (
    <>
      <div style={{
        width: "100vw",
        height:"100vh", 
        backgroundColor :"#f5f5f5" 
      }}>
        <Router>
          <Appbar userEmail={userEmail}/>
            <Routes>
              <Route path={"/landing"} element={<Landing userEmail={userEmail}/>}/>
              <Route path = {"/signin"} element={<Signin setUserEmail={setUserEmail}/>}/>
              <Route path ={"/signup"} element={<Signup setUserEmail={setUserEmail}/>}/>
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App