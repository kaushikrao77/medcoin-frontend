import { useState } from "react";
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
import Navbar from "../../components/Navbar";
import Link from "next/link";
import TransactionCard from "../../components/TransactionCard";

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
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  alignSelf: "center",
                }}
                color="text.primary"
                variant="h2"
                // className="page-name"
              >
                Medcoin Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 700,
                }}
                color="text.primary"
                variant="h3"
                className="page-name"
              >
                3,000M
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card className={styles.cardauth} sx={{ width: "90vw", maxWidth: 600 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                // textAlign: "center",
                marginBottom: "30px",
              }}
              color="text.primary"
              variant="h2"
              //   className="page-name"
            >
              RECENT TRANSACTIONS
            </Typography>
            <TransactionCard />
            <TransactionCard sent={true} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
