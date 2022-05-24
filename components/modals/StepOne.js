import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography,Button,Modal,TextField } from "@mui/material";
import { HospitalNavbar } from '../Navbar';



const StepOne = ({nextStep}) => {

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
                    Enter the Patient ID.
                    </Typography>
                    <form onSubmit={submitFormData}>
                        <TextField
                            sx={{ marginBottom: "20px" }}
                            id="outlined-basic"
                            label="Patient ID"
                            variant="outlined"
                            fullWidth
                            // value={patientId}
                            // onChange={(e) => {
                            //   setEmail(e.target.value);
                            // }}
                        />

                        
                        
                        {/* <CardActions> */}
                        
                        <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ marginTop: "20px" }}
                        >
                        Continue
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