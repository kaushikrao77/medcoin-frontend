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
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AlertComponent from "../components/Alert";
import { InputLabel, MenuItem, FormSelect, Select } from "@mui/material";

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [alertOpen, setAlertOpen] = useState(false);
  // const onSubmit = data => console.log(data);

  const onSubmit = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      urlencoded.append(key, value);
    }
    console.log({ data });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (!result.errors) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("userId", result.user._id);
          if (result.user.role == "research") {
            router.push("/research-institute/profile");
          } else if (result.user.role == "hospital") {
            router.push("/medical-institute/profile");
          } else {
            router.push("/patient/profile");
          }
        } else {
          if (Array.isArray(result.errors.msg)) {
            if (result.errors.msg[0].msg == "IS_EMPTY")
              setAlertOpen({
                text: "Please fill out all required fields",
                type: "error",
              });
            else {
              setAlertOpen({
                text: result.errors.msg[0].msg,
                type: "error",
              });
            }
          } else setAlertOpen({ text: result.errors.msg, type: "error" });
        }
      })
      .catch((error) => {
        console.log("error", error);
        setAlertOpen({ text: error?.msg, type: "error" });
      });
    // console.log("account created");
  };

  return (
    <>
      <Navbar />
      <AlertComponent openAlert={alertOpen} setOpenAlert={setAlertOpen} />
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                {...register("name")}
                fullWidth
                required
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
                fullWidth
                type="email"
                required
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password")}
                fullWidth
                type="password"
                required
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={getValues("role") || "user"}
                  label="Role"
                  sx={{ marginBottom: "20px" }}
                  onChange={(e) =>
                    setValue("role", e.target.value, { shouldValidate: true })
                  }
                >
                  <MenuItem value={"user"}>Patient</MenuItem>
                  <MenuItem value={"research"}>Research Institute</MenuItem>
                  <MenuItem value={"hospital"}>Medical Institute</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                {...register("phone")}
                fullWidth
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="City"
                variant="outlined"
                {...register("city")}
                fullWidth
              />
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
                {...register("country")}
                fullWidth
              />

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
