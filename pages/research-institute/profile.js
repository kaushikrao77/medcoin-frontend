import { useEffect, useState } from "react";
import styles from "../../styles/auth.module.css";
import { TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { ResearchNavbar } from "../../components/Navbar";
import Link from "next/link";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("account created");
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:5000/users/${localStorage.getItem("userId")}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUserDetails(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <ResearchNavbar />
      <div className={styles.main}>
        <Card className={styles.cardauth} sx={{ width: "90vw", maxWidth: 600 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: "30px",
              }}
              color="text.primary"
              variant="h3"
              className="page-name"
            >
              My Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Research Institute ID"
                variant="outlined"
                value={userDetails._id}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={userDetails.name}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={userDetails.email}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                value={userDetails.phone}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={userDetails.city}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
                value={userDetails.country}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              {/* <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                fullWidth
              /> */}

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Your date of birth"
                  value={date}
                  onChange={(e) => {
                    setDate(e);
                  }}
                  renderInput={(params) => (
                    <TextField
                      sx={{ marginBottom: "20px", width: "100%" }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider> */}

              {/* <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    console.log(gender);
                  }}
                >
                  <Stack spacing={2} direction="row">
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
                  </Stack>
                </RadioGroup>
              </FormControl> */}
              <br />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ marginTop: "20px" }}
              >
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
