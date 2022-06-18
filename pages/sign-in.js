import styles from "../styles/auth.module.css";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { LandingNavbar } from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import AlertComponent from "../components/Alert";
import { useRouter } from "next/router";

export default function SignIn() {
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

  const onSubmit = (data) => {
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      urlencoded.append(key, value);
    }

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (!result.errors) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("userId", result.user._id);
          localStorage.setItem("userRole", result.user.role);
          router.push("/patient/profile");
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
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <LandingNavbar />
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
              Welcome Back
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email")}
                required
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                {...register("password")}
                required
              />
              {/* <CardActions> */}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ marginTop: "20px" }}
              >
                Sign In
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
                  Dont have an account yet?
                </Typography>
                <Link href="/sign-up">
                  <Button
                    variant="text"
                    type="submit"
                    sx={{ marginTop: "5px" }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Stack>
            </form>
          </CardContent>

          {/* </CardActions> */}
        </Card>
      </div>
    </>
  );
}
