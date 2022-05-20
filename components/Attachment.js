import styles from "../styles/components/Attachment.module.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Attachment() {
  return (
    <div className={styles.Attachment}>
      <Stack spacing={1} direction="row" alignItems="center">
        <div className={styles.attIcon}>
          <AttachmentIcon />
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          x-rayImage.png
        </Typography>
      </Stack>
    </div>
  );
}
