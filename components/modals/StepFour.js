import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography,Button,Modal,TextField } from "@mui/material";
import { HospitalNavbar } from '../Navbar';
import { FormControl,InputLabel,MenuItem,FormSelect,Select,FormLabel,RadioGroup,Radio,FormControlLabel } from '@mui/material';



const StepOne = ({nextStep,prevStep}) => {

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
        // setError(true);
        // } else {
        // nextStep();
        // }
        nextStep();
    };


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <HospitalNavbar/>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Add Remarks.
                    </Typography>
                    <form onSubmit={submitFormData}>
                        <TextField
                            sx={{ marginBottom: "20px" }}
                            id="outlined-basic"
                            label="Remarks"
                            variant="outlined"
                            fullWidth
                            // value={patientId}
                            // onChange={(e) => {
                            //   setEmail(e.target.value);
                            // }}
                        />

                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>

                    
                    
                    </FormControl>
                        
                        
                        {/* <CardActions> */}
                        <Button
                        variant="contained"
                        onClick={prevStep}
                        fullWidth
                        sx={{ marginTop: "20px" }}
                        >
                        PRevious
                        </Button>

                        <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ marginTop: "20px" }}
                        >
                        Submit
                        </Button>
                        </form>
                    </CardContent>

                    {/* </CardActions> */}
                </Card>
            </Modal>
        </div>
    )
}

export default StepOne