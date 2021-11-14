import { TextField, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import useColor from "customHooks/useColor";
import { MenuItem } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import * as React from "react";
import "routes/admin/style.common.css";
import "../style.css";
import "./style.css";
export default function UpdateModal({
  open,
  onClose,
  schema,
  headerTitle,
  onSubmit,
  loading = false,
}) {
  
  const colors = useColor();

  let initialData = {};
  const requiredList = [];
  schema.forEach((item) => {
    if (item.initial) {
      initialData[item.fieldName] = item.initial;
    }

    if(item.type == "options") {
      initialData[item.fieldName] = item.options[0].value
    }


    if (item.required) {
      requiredList.push(item.fieldName);
    }
  });

  const [formData, setFormData] = React.useState(initialData);

  const getButtonDisabled = () => {
    let disabled = false;
    const selectedKeys = Object.keys(formData);
    if (selectedKeys.length >= requiredList.length) {
      requiredList.forEach((item) => {
        if (!selectedKeys.includes(item)) {
          disabled = true;
        } else {
          if (!formData[item]) {
            disabled = true;
          }
        }
      });
    }
    console.log("I am disabled or not ? ", disabled);
    return disabled;
  };

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  React.useEffect(() => {
    const d = getButtonDisabled();
    setDisableSubmit(d);
  }, [formData]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100vw - 30%)",
    height: "calc(100vh - 20%)",
    bgcolor: colors.background.main,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box display="flex" flexDirection="column" sx={style}>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Typography textAlign="center" variant="subtitle2">
            {headerTitle}
          </Typography>
          <Box flexGrow={1}></Box>
          <div>
            <Button
              disabled={loading || disableSubmit}
              sx={{
                mr: 2,
              }}
              onClick={() => {
                //   validate form
                if (onSubmit) {
                  const data = formData;

                  // remove redundant / null data
                  Object.keys(data).forEach((key) => {
                    if (!data[key]) {
                      delete data[key];
                    }
                  });
                  onSubmit(data);
                }
              }}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </Box>
        <Box
          flexGrow={1}
          sx={{
            overflowY: "auto",
          }}
          display="flex"
          justifyContent="start"
          flexDirection="column"
        >
          {schema.map((item, i) => (
            <div className="w-100" key={i}>
              {item.type == "image" ? (
                <Container
                  sx={{
                    marginTop: "20px",
                  }}
                  maxWidth="sm"
                >
                  <Box className="dropzone-wrapper">
                    <DropzoneArea
                      filesLimit={1}
                      showFileNames={true}
                      showPreviews={false}
                      showAlerts={false}
                      acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                      maxFileSize={2000000}
                      onChange={(files) => {
                        if (files) {
                          let imageData = {};
                          if (files.length > 0) {
                            imageData[item.fieldName] = files[0];
                            setFormData({
                              ...formData,
                              ...imageData,
                            });
                          } else {
                            imageData[item.fieldName] = null;
                            setFormData({
                              ...formData,
                              ...imageData,
                            });
                          }
                        }
                      }}
                    />
                    {item.required && (
                      <Typography variant="caption">* required</Typography>
                    )}
                  </Box>
                </Container>
              ) : item.type == "options" ? (
                <TextField
                  select
                  label={item.label}
                  className="text-select-white-text"
                  value={formData[item.fieldName]}
                  onChange={(e) => {
                    let d = formData;
                    let input = {};
                    input[item.fieldName] = e.target.value;
                    console.log("INPUT , ", input);
                    setFormData({
                      ...formData,
                      ...input,
                    });
                  }}
                  helperText={`${
                    item.required && "* required"
                  }`}
                  variant="filled"
                >
                  {item.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  multiline={item.multiline}
                  sx={{
                    mt: 2,
                  }}
                  maxRows={4}
                  error={!formData[item.fieldName] && item.required}
                  helperText={item.required && `* required`}
                  className="text-field-white-text w-100"
                  value={formData[item.fieldName]}
                  onChange={(e) => {
                    let newTextData = {
                      ...formData,
                    };
                    newTextData[item.fieldName] = e.target.value;

                    setFormData({
                      ...newTextData,
                    });
                  }}
                  label={item.label}
                />
              )}
            </div>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
