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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TransactionCard({ sent = false }) {
  return (
    <div className={styles.MedicalHistoryCard}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Appolo Eye Hospital
              </Typography>
              {sent ? (
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "700" }}
                  variant="h5"
                  component="div"
                  className="red"
                >
                  -10,000M
                </Typography>
              ) : (
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "700" }}
                  variant="h5"
                  component="div"
                  className="green"
                >
                  +10,000M
                </Typography>
              )}
            </div>
            <Typography color="text.secondary">
              20th March, 2022 | 9:30AM
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
