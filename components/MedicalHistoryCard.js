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
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MedicalHistoryCard({ asset }) {
  console.log({ asset });
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
                {asset.remarks}
              </Typography>
              <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
                {asset.title}
              </Typography>
            </div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {new Date(asset.createdAt).toGMTString()}
            </Typography>
          </Stack>
          <Typography
            sx={{ mb: 2 }}
            color="text.secondary"
            // textOverflow="ellipsis"
            // height={70}
            minHeight={50}
          >
            {truncate(asset?.desc, 500)}
          </Typography>
          <Stack spacing={2} direction="row">
            {asset.link ? (
              <a target="_blank" href={asset.link}>
                {/* <div> */}
                {/* asdf */}
                <Attachment name={asset.name} />
                {/* </div> */}
              </a>
            ) : (
              <Attachment name={asset.name} />
            )}
            {/* <Attachment /> */}
          </Stack>
        </CardContent>
        {/* <CardActions>
          <Button size="medium" variant="outlined" fullWidth>
            View More
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
