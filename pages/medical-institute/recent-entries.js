import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/patient/request.module.css";
import { HospitalNavbar } from "../../components/Navbar";
import MedicalHistoryCard from "../../components/MedicalHistoryCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from 'next/link'

export default function RecentEntries() {
  return (
    <div className={styles.MedicalHistory}>
      <Head>
        <title>MEDCOIN | Recent Entries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HospitalNavbar />
      <div className={`container`}>
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <div className="page-name">Recent Entries</div>
          <Link href="/medical-institute/forms/formHomepage">
          <Button variant="contained" color="primary">
            Add Record
          </Button>
          </Link>
        </Stack>
        <div className={styles.requestCards}>
          <MedicalHistoryCard />
          <MedicalHistoryCard />
        </div>
      </div>
    </div>
  );
}
