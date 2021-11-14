import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useColor from "customHooks/useColor";

export default function DeleteModal({ open, message, onCancel, onDelete }) {
  const colors = useColor();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: colors.background.main,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
          <Button
            onClick={() => {
              if (onDelete) {
                onDelete();
              }
            }}
            variant="contained"
          >
            Confirm Delete
          </Button>
          <Button
            onClick={() => {
              if (onCancel) {
                onCancel();
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
