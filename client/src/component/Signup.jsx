import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import { Card, Typography} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({setUserEmail}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSingup = async () => {
        try {
            const res = await fetch("http://localhost:3000/user/signup", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });
        
            if(res.ok){
                const data = await res.json();
                console.log(data);
                const token = data.data.accessToken;
                alert("Admin Created Successfully");
                localStorage.setItem("token",token);
                setUserEmail(username);
                navigate("/landing");
            }else{
                console.log("Signup failed", data);
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
                    Welcome to Chat-App. Sign up below
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
                    label="Username"
                    value={username}
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/><br/>
                <TextField 
                    fullWidth = {true}
                    label="Email"
                    value={email}
                    variant="outlined" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>
                <TextField 
                    fullWidth = {true}
                    label="Password" 
                    value={password}
                    variant="outlined" 
                    type= {"password"}
                    onChange={(e) => setPassword(e.target.value)}
                />  
                <br/><br/>
                <Button size= "large" variant="contained" onClick={handleSingup}>Sign up</Button>
            </Card>
        </div> 
    </div>
}

export default Signup