import styles from "../../styles/components/Modal.module.css";
import { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";

// import RecentEntries from "../recent-entries";

export default function AddRecordModal({ addRecordModal, setAddRecordModal }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const submitFormData = (data) => {};
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
              <StepOne
                setFormStep={setFormStep}
                formStep={formStep}
                register={register}
              />
            ) : formStep == 2 ? (
              <StepTwo
                setFormStep={setFormStep}
                formStep={formStep}
                register={register}
              />
            ) : formStep == 3 ? (
              <StepThree
                setFormStep={setFormStep}
                formStep={formStep}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <StepFour
                setFormStep={setFormStep}
                formStep={formStep}
                register={register}
                handleSubmit={handleSubmit}
                setValue={setValue}
                getValues={getValues}
              />
            )}
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

function StepOne({ setFormStep, formStep, register }) {
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
        {...register("patientId")}
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

function StepTwo({ setFormStep, formStep, register }) {
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
        {...register("title")}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        {...register("desc")}
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

function StepThree({ setFormStep, formStep, register, setValue }) {
  const [files, setFiles] = useState("");
  const [fileSize, setFileSize] = useState(true);
  const [filesArr, setFilesArr] = useState([]);

  const submitFormData = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  const uploadFileHandler = (event) => {
    setFiles(event.target.files);
    // console.log({ filesBefore: event.target.files });
    setFilesArr(Array.from(event.target.files));
    setFileSize(true);
    const formData = new FormData();
    for (let i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files[i].size);
      if (event.target.files[i].size > 1024) {
        setFileSize(false);
        return;
      }
      formData.append(`files`, event.target.files[i]);
    }
    console.log({ files: event.target.files });
    console.log({ formData });
    setValue("files", formData, { shouldValidate: true });
  };
  useEffect(() => {
    // console.log({ filesAfter: files });
    if (!files) return;
    // setFileSize(true);
    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   console.log(files[i].size);
    //   if (files[i].size > 1024) {
    //     setFileSize(false);
    //     return;
    //   }
    //   formData.append(`files`, files[i]);
    // }
    // console.log({ files });
    // console.log({ formData });
    // setValue("files", formData, { shouldValidate: true });
  }, [files]);

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
      {/* <FileUpload
        setValue={setValue}
        files={files}
        setFiles={setFiles}
        fileSize={fileSize}
        setFileSize={setFileSize}
        filesArr={filesArr}
        setFilesArr={setFilesArr}
        uploadFileHandler={uploadFileHandler}
      /> */}
      <TextField
        sx={{ marginBottom: "20px" }}
        id="outlined-basic"
        label="Asset Name"
        variant="outlined"
        fullWidth
        {...register("name")}
        // value={patientId}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
      />
      <TextField
        sx={{ marginBottom: "20px" }}
        id="outlined-basic"
        label="Asset Link"
        variant="outlined"
        fullWidth
        {...register("link")}
        // value={patientId}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
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

function StepFour({
  setFormStep,
  formStep,
  register,
  handleSubmit,
  setValue,
  getValues,
}) {
  const submitFormData = (data) => {
    console.log(data);

    setFormStep(formStep + 1);
    // console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      urlencoded.append(key, value);
    }
    urlencoded.append("owner", data.patientId);
    urlencoded.append("author", localStorage.getItem("userId"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/hospital/asset", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setValue("age", age, { shouldValidate: true });
    setValue("gender", gender, { shouldValidate: true });
  }, [age, gender]);
  // useEffect(() => {
  //   setValue("name", "asdf", { shouldValidate: true });
  // }, []);
  return (
    <form onSubmit={handleSubmit(submitFormData)} style={{ width: "400px" }}>
      <TextField
        sx={{ marginBottom: "20px" }}
        id="outlined-basic"
        label="Hospital Name"
        variant="outlined"
        fullWidth
        {...register("remarks")}
        // value={patientId}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Diagnosed As</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={getValues("diagnosedAs") || ""}
          label="Age"
          sx={{ marginBottom: "20px" }}
          onChange={(e) =>
            setValue("diagnosedAs", e.target.value, { shouldValidate: true })
          }
        >
          <MenuItem value={1}>Skin Cancer</MenuItem>
          <MenuItem value={2}>Thyroid</MenuItem>
          <MenuItem value={3}>High Blood Pressure</MenuItem>
          <MenuItem value={4}>Alzheimer's</MenuItem>
          <MenuItem value={5}>Multiple personality disorder</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={getValues("diagnosedAs") || ""}
          label="Diagnosed as"
          sx={{ marginBottom: "20px" }}
          onChange={(e) =>
            setValue("diagnosedAs", e.target.value, { shouldValidate: true })
          }
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl> */}
      <FormControl fullWidth>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={getValues("sex")}
          onChange={(e) =>
            setValue("sex", e.target.value, { shouldValidate: true })
          }
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
