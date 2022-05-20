import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/patient/request.module.css";
import Navbar from "../../components/Navbar";
import RequestCard from "../../components/RequestCard";

export default function Requests() {
  return (
    <div className={styles.Requests}>
      <Head>
        <title>MEDCOIN | Requests</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`container`}>
        <div className="page-name">Requests</div>
        <div className={styles.requestCards}>
          <RequestCard />
          <RequestCard />
        </div>
      </div>
    </div>
  );
}
