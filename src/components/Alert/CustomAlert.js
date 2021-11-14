import React from "react";
import PropTypes from "prop-types";

import { Alert, AlertTitle } from "@mui/material";


function CustomAlert({
  title,
  message,
  type = "info",
  onClose,
  timeout = 5000,
}) {
  React.useEffect(() => {
    function closeAlert() {
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, timeout);
    }

    closeAlert();
  }, []);

  return (
    <Alert
      onClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      severity={type}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}

CustomAlert.propTypes = {
  type: PropTypes.oneOf(["error", "info", "success", "warning"]),
  title: PropTypes.string,
  message: PropTypes.string,
  timeout: PropTypes.number,
  onClose: PropTypes.func,
};

export default CustomAlert;
