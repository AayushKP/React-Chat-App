import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import { Card, Typography} from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



function Signin({setUserEmail}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const res = await fetch("http://localhost:3000/user/signin", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
        
            if(res.ok){
                const data = await res.json();
                const token = data.data.accessToken;
                console.log(data);
                localStorage.setItem('token', token);
                alert('Sign in Successfully')
                setUserEmail(username);
                navigate("/landing")
            }else{
                console.log("Signed In failed", data);
            }
        } catch (error) {
            console.log("Error: ",error);
        }
    }
    return <div>
            <div style={{
                paddingTop: 150, 
                marginBottom: 10,
                display:"flex",
                justifyContent:"center"
            }}>
                <Typography variant = {"h6"}>
                    Welcome back. Sign in below
                </Typography>
            </div>
        <div style={{
            display:"flex",
            justifyContent:"center"
        }}>
            <Card variant = {"outlined"} style = {{
               width: 400,
               padding: 20 
            }}>
                <TextField 
                    fullWidth = {true}
                    label="username" 
                    value={username}
                    variant="outlined" 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/><br/>
                <TextField 
                    fullWidth = {true}
                    label="Password" 
                    variant="outlined" 
                    type= {"password"}
                    onChange={(e) => setPassword(e.target.value)}
                />  
                <br/><br/>
                <Button size= "large" variant="contained" onClick={handleSignin}>Sign in</Button>
            </Card>
        </div>
    </div>
}

export default Signin