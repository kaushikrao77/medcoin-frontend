import styles from "../../styles/components/Modal.module.css";
import { useState, forwardRef } from "react";
import { Alert, Link } from "@mui/material";
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
import AlertComponent from "../Alert";

// import Checkbox from "@mui/material/Checkbox";

// import RecentEntries from "../recent-entries";

export default function GiveAccessModal({ addRecordModal, setAddRecordModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [country, setCountry] = useState("India");
  const submitFormData = (data) => {
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("action", "grant");
    urlencoded.append("hospitalID", data.hospitalId);
    urlencoded.append("userId", localStorage.getItem("userId"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/users/permission", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (!result.errors) {
          console.log("closee");
          setAddRecordModal(false);
          setOpen({ open: true, text: result, type: "success" });
        }
      })
      .catch((error) => console.log("error", error));
  };
  const [formStep, setFormStep] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.AddRecordModal}>
      <AlertComponent openAlert={open} setOpenAlert={setOpen} />
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
              onClick={() => setOpen(true)}
            >
              Enter Hospital ID
            </Typography>
            <form
              onSubmit={handleSubmit(submitFormData)}
              style={{ width: "400px" }}
            >
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Hospital ID"
                variant="outlined"
                fullWidth
                {...register("hospitalId")}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Give Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
