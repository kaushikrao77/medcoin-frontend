import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
      {/* <Navbar /> */}
      <main className={styles.main}>{/* <SignIn /> */}</main>
    </div>
  );
}
