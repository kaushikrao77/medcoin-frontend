import { useState } from "react";
import styles from "../styles/Home.module.css";
import { TextField,Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import Navbar from "../components/Navbar";

export default function SignUp() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("account created");
  }

  return (
    
    <>
    <Navbar/>
    <div className={styles.main}>
      
      <Card className={styles.cardauth} sx={{ minWidth: 325, maxWidth:400}}>
          <CardContent>
          <h3>Create your account.</h3>
          <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" 
            label="First name" 
            variant="standard" 
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              console.log(firstname)
            }}
            /><br/><br/>
          <TextField id="standard-basic" 
            label="Last name" 
            variant="standard" 
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            /><br/><br/>  
          <TextField id="standard-basic" 
            label="email" 
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

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Your date of birth"
              value={date}
              onChange={(e) => {
                setDate(e);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider><br/><br/>


          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(e)=>{setGender(e.target.value);
              console.log(gender)}}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl><br/><br/>

        <Button variant="contained" type="submit">SignUp</Button>
        </form>

          </CardContent>
          
        
        </Card>
      
        
      
  </div>
  </>

  );
}
