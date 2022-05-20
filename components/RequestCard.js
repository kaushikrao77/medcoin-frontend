import styles from "../styles/components/RequestCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function RequestCard() {
  return (
    <div className={styles.RequestCard}>
      <Card>
        <CardContent>
          <div className={styles.tags}>
            <div className={`${styles.tag} ${styles.tag1}`}>
              Medical History Access
            </div>
          </div>
          <div className={styles.rcText}>
            Fortis Hospital wants to add to your medical history
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Accept</Button>
            <Button variant="outlined">Decline</Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
