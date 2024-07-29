import { Button, Card } from "@mui/material"

function Landing({userEmail}){

    if(userEmail){
        return <Card variant = {"outlined"} style = {{
            width: 500,
            padding: 20
         }}>
                <h2>Welcome to CampusConnect Chat-App</h2>
                <h4>Connect with Your College Community Like Never Before</h4>
        </Card>
    }
    return <div>
        <h1>Welcome to CampusConnect Chat-App</h1>
        <h4>Connect with Your College Community Like Never Before</h4>
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

export default Landing