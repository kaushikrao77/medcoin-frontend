import { useState } from "react";
import styles from "../styles/auth.module.css";
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
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("account created");
  };

  return (
    <>
      <Navbar />
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
              Create your account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                  console.log(firstname);
                }}
                fullWidth
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                fullWidth
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
              />

              <TextField
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
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
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
              </LocalizationProvider>

              <FormControl>
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
              </FormControl>
              <br />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ marginTop: "20px" }}
              >
                Sign Up
              </Button>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems={"center"}
                sx={{ marginTop: "10px" }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    //   fontWeight: 700,
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  Already have an account?
                </Typography>
                <Link href="/sign-in">
                  <Button
                    variant="text"
                    type="submit"
                    sx={{ marginTop: "5px" }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
