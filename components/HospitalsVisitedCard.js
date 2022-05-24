import styles from "../styles/components/MedicalHistoryCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import truncate from "../utils/truncate";
import Attachment from "./Attachment";

export default function HospitalsVisitedCard() {
  return (
    <div className={styles.MedicalHistoryCard}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Stack spacing={2} direction="row" justifyContent="space-between"> */}
          <div>
            <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
              Fortis Hospital
            </Typography>
          </div>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            Last activity: 20th March, 2022
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            Records added: 5
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Attachments: 3
          </Typography>
          {/* </Stack> */}
          {/* <Typography
            sx={{ mb: 2 }}
            color="text.secondary"
            // textOverflow="ellipsis"
            // height={70}
            minHeight={50}
          >
            asdfasdfasdfasdfasdf asdf asdf asdf
          </Typography> */}
          {/* <Stack spacing={2} direction="row">
            <Attachment />
            <Attachment />
          </Stack> */}
        </CardContent>
        <CardActions>
          <Button size="medium" variant="outlined" fullWidth>
            View all records
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
