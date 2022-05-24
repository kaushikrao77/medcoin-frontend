import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { Homepage } from "../components/Homepage";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>MEDCOIN</title>
      </Head>
      <Navbar />
      <main className={styles.main}>{/* <SignIn /> */}</main>
    </div>
  );
}
