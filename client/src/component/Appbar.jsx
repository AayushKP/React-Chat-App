import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";


function Appbar({userEmail}){
    const navigate = useNavigate();
    
    if(userEmail){
        return <div>
            <div style={{
                display: "flex",
                justifyContent:"space-between",
                padding: 4
            }}>
                <div>
                    <Typography variant={"h6"}>Chat-App</Typography>
                </div>
    
                <div style={{display: "flex"}}>
                    <div>
                        {userEmail}
                    </div>
                    <div style={{marginRight: 10}}>
                        <Button 
                            variant="contained"
                            onClick={() => {
                                localStorage.setItem("token",null);
                                window.location = "/landing";
                            }}
                        >Logout</Button>
                    </div>
                </div>
            </div>
        </div>
    }


    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <Typography variant={"h6"}>Chat-App</Typography>
        </div>

        <div style={{display:"flex"}}>
            <div style={{marginRight: 10}}>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signup")
                    }}
                >Signup</Button>
            </div>
            <div>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signin")
                    }}
                >Signin</Button>
            </div>

        </div>
    </div>
}

export default Appbar