import styles from "../../styles/components/Modal.module.css";
import { useState } from "react";
import { Link } from "@mui/material";
import { HospitalNavbar } from "../Navbar";
import { Typography, Button, Modal, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import FileUpload from "../fileUpload";
import { useForm } from "react-hook-form";
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
  FormGroup,
  Checkbox,
} from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";

// import RecentEntries from "../recent-entries";

export default function AddRecordModal({ addRecordModal, setAddRecordModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [country, setCountry] = useState("India");
  const submitFormData = (data) => {
    console.log(data);
    console.log({ country });
  };
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
              Add Study Details
            </Typography>
            <form
              onSubmit={handleSubmit(submitFormData)}
              style={{ width: "400px" }}
            >
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Study Name"
                variant="outlined"
                fullWidth
                {...register("studyName")}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Country"
                  sx={{ marginBottom: "20px" }}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"USA"}>USA</MenuItem>
                  <MenuItem value={"Canada"}>Canada</MenuItem>
                  <MenuItem value={"Mexico"}>Mexico</MenuItem>
                  <MenuItem value={"Brazil"}>Brazil</MenuItem>
                  <MenuItem value={"England"}>England</MenuItem>
                  <MenuItem value={"Germany"}>Germany</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
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
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Stack>
                </RadioGroup>
              </FormControl> */}
              <FormGroup>
                <FormLabel id="demo-radio-buttons-group-label">
                  Diseases
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      checked={true}
                      onChange={() => {}}
                    />
                  }
                  label="High Blood Pressure"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      checked={true}
                      onChange={() => {}}
                    />
                  }
                  label="High Blood Sugar"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Stack direction="row" spacing={0.2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        checked={true}
                        onChange={() => {}}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        checked={true}
                        onChange={() => {}}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        checked={true}
                        onChange={() => {}}
                      />
                    }
                    label="Other"
                  />
                </Stack>
              </FormGroup>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </form>
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
