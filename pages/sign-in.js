import styles from "../styles/auth.module.css";
import { TextField,Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function SignIn() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("logged in");
  }

  return (
    <>

        <Card className={styles.cardauth} sx={{ minWidth: 275 }}>
          <CardContent>
            <h3>Welcome back</h3>
            <form onSubmit={handleSubmit}>
              <TextField id="standard-basic" 
                label="Email" 
                variant="standard" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
              }}
                /><br/><br/>
              <TextField id="standard-basic" 
                label="Password" 
                variant="standard" 
                type="password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
              }}
                /><br/><br/>
              
            </form>
          </CardContent>
          <CardActions>
            <Button variant="contained" type="submit">Login</Button>
            <Link href="/sign-up"><Button>Create an account.</Button></Link>
          </CardActions>
        </Card>

    </>
  );
}
