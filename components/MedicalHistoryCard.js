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

export default function MedicalHistoryCard() {
  return (
    <div className={styles.MedicalHistoryCard}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Appolo Eye Hospital
              </Typography>
              <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
                Eye X-Ray with diagnosis
              </Typography>
            </div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              20th March, 2022 | 9:30AM
            </Typography>
          </Stack>
          <Typography
            sx={{ mb: 2 }}
            color="text.secondary"
            // textOverflow="ellipsis"
            // height={70}
            minHeight={50}
          >
            {truncate(
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
              500
            )}
          </Typography>
          <Stack spacing={2} direction="row">
            <Attachment />
            <Attachment />
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="outlined" fullWidth>
            View More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
