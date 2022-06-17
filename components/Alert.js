import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState, forwardRef, useEffect } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertComponent({ openAlert, setOpenAlert }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenAlert(false);
  };
  useEffect(() => {
    console.log(openAlert);
    setOpen(openAlert);
  }, [openAlert]);
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={open.type} sx={{ width: "100%" }}>
        {open.text}
      </Alert>
    </Snackbar>
  );
}
