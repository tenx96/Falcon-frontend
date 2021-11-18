import React from "react";
import { Typography, Box, Container, TextField, Button } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import "routes/admin/style.common.css";
function DayComponent({ maxImages = 3, title }) {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
      overflow="auto"
      width="100%"
    >
      <Box mb={3}>
        {" "}
        <Typography variant="h3">{title}</Typography>
      </Box>
      <TextField
        className="text-field-white-text w-100"
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        sx={{
          mt: 2,
        }}
        className="text-field-white-text w-100"
        id="outlined-basic"
        label="Subtitle"
        variant="outlined"
      />

      <TextField
        multiline
        maxRows={4}
        className="text-field-white-text w-100"
        sx={{
          my: 3,
        }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />

      <Box className="dropzone-wrapper">
        <DropzoneArea
          filesLimit={1}
          showFileNames={true}
          showPreviews={false}
          showAlerts={false}
          acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
          maxFileSize={2000000}
          onChange={(files) => {}}
        />

        <Typography variant="caption">* required</Typography>
      </Box>
      <Box mt={5}>
        <Button variant="outlined">Update</Button>
      </Box>
    </Box>
  );
}

export default DayComponent;
