import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import Link from "next/link";


import Navbar, {
  HospitalNavbar,
  ResearchNavbar,
  LandingNavbar,
} from "../components/Navbar";

import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { Homepage } from "../components/Homepage";
import { useEffect, useState } from "react";


export default function Home() {
  const [role, setRole] = useState(0);
  useEffect(() => {
    let lsRole = localStorage.getItem("userRole");
    if (lsRole == "research") {
      setRole(3);
    } else if (lsRole == "hospital") {
      setRole(2);
    } else if (lsRole == "user") {
      setRole(1);
    }
  }, []);

  
  return (
    <div className={styles.Home}>
      <Head>
        <title>MEDCOIN</title>
      </Head>
      {role == 1 ? (
        <Navbar />
      ) : role == 2 ? (
        <HospitalNavbar />
      ) : role == 3 ? (
        <ResearchNavbar />
      ) : (
        <LandingNavbar />
      )}

    <div className={styles.text}>
      <Typography variant="h3" gutterBottom sx={{ marginBottom:"30px",fontWeight:"700"}}>
          Facilitating Secure Medical Data Aggregation.
      </Typography>
      <Typography variant="h5" className={styles.subHeading} sx={{ marginBottom:"30px"}}>
          We help you manage, store and view your medical records in a secure and efficient way.
      </Typography>
      <div className={styles.buttons}>
      
      <Link href="/sign-up" className={styles.button}>
        <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "10px", marginRight:"30px", minWidth:"200px",minHeight:"50px"}}
          >
            Sign Up
        </Button>
      </Link>

      <Link href="/sign-in">
          <Button
              variant="outlined"
              type="submit"
              sx={{ marginTop: "10px",minWidth:"200px",minHeight:"50px" }}
              >
                Sign In
          </Button>
      </Link>      
    </div>
    </div>
    
      
    
    
    </div>
  );
}







{/* <div className={styles.signUp}>
            
          </div>


          <div className={styles.signIn}>
            <Typography
              sx={{
                  fontSize: 24,
                  textAlign: "center",
                  marginTop: "5px",
                }}
                  >
                  Already have an account?
            </Typography>
        
            
          
          </div> */}