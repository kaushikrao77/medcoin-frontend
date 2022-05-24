import styles from "../styles/auth.module.css";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in");
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
              Welcome Back
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                sx={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
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
                <Button variant="text" type="submit" sx={{ marginTop: "5px" }}>
                  Sign Up
                </Button>
              </Link>
            </Stack>
          </CardContent>

          {/* </CardActions> */}
        </Card>
      </div>
    </>
  );
}
