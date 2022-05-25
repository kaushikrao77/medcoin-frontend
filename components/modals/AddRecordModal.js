import styles from "../../styles/components/Modal.module.css";
import { useState } from "react";
import { Link } from "@mui/material";
import { HospitalNavbar } from "../Navbar";
import { Typography, Button, Modal, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import FileUpload from "../fileUpload";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormSelect,
  Select,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

// import RecentEntries from "../recent-entries";

export default function AddRecordModal({ addRecordModal, setAddRecordModal }) {
  const submitFormData = () => {};
  const [formStep, setFormStep] = useState(1);
  return (
    <div className={styles.AddRecordModal}>
      <Modal
        open={addRecordModal}
        onClose={() => setAddRecordModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <Card
          sx={{
            width: 500,
            maxWidth: "90vw",
            // height: 500,
            padding: "25px",
          }}
        >
          <CardContent
            sx={{
              display: "grid",
              placeItems: "center",
              placeContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: "40px",
              }}
              color="text.primary"
              variant="h3"
              className="page-name"
            >
              Add Patient Record
            </Typography>
            {formStep == 1 ? (
              <StepOne setFormStep={setFormStep} formStep={formStep} />
            ) : formStep == 2 ? (
              <StepTwo setFormStep={setFormStep} formStep={formStep} />
            ) : formStep == 3 ? (
              <StepThree setFormStep={setFormStep} formStep={formStep} />
            ) : (
              <StepFour setFormStep={setFormStep} formStep={formStep} />
            )}
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

function StepOne({ setFormStep, formStep }) {
  const submitFormData = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={submitFormData} style={{ width: "400px" }}>
      <TextField
        sx={{ marginBottom: "10px" }}
        id="outlined-basic"
        label="Patient ID"
        variant="outlined"
        fullWidth
      />
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{ marginTop: "20px" }}
      >
        Next
      </Button>
    </form>
  );
}

function StepTwo({ setFormStep, formStep }) {
  const submitFormData = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={submitFormData} style={{ width: "400px" }}>
      <TextField
        sx={{ marginBottom: "10px" }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
      />
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={() => setFormStep(formStep - 1)}
          fullWidth
        >
          Back
        </Button>
        <Button variant="contained" type="submit" fullWidth>
          Next
        </Button>
      </Stack>
    </form>
  );
}

function StepThree({ setFormStep, formStep }) {
  const submitFormData = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={submitFormData} style={{ width: "400px" }}>
      {/* <TextField
        sx={{ marginBottom: "10px" }}
        id="outlined-basic"
        label="File Upload"
        variant="outlined"
        fullWidth
      /> */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 400,
          // textAlign: "center",
          marginBottom: "10px",
        }}
        color="text.primary"
        variant="h3"
      >
        Upload all files that need to be attached
      </Typography>
      <FileUpload />
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={() => setFormStep(formStep - 1)}
          fullWidth
        >
          Back
        </Button>
        <Button variant="contained" type="submit" fullWidth>
          Next
        </Button>
      </Stack>
    </form>
  );
}

function StepFour({ setFormStep, formStep }) {
  const submitFormData = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <form onSubmit={submitFormData} style={{ width: "400px" }}>
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
          sx={{ marginBottom: "20px" }}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <Stack direction="row" spacing={0.5}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </Stack>
        </RadioGroup>
      </FormControl>

      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={() => setFormStep(formStep - 1)}
          fullWidth
        >
          Back
        </Button>
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
