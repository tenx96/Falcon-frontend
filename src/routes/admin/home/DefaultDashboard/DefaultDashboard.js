import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdminLoader from "routes/admin/AdminLoader";
import { updateAlert } from "store/alert";
import DeleteModal from "../modals/DeleteModal";
import UpdateModal from "../modals/UpdateModal";

function DefaultDashboard({
  name,
  data,
  isLoaded,
  updateApi,
  createApi,
  deleteApi,
  performReload,
  updateSchema,
  createSchema,
}) {
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  const [openUpdateModal, setopenUpdateModal] = useState(false);
  const [openCreateModal, setopenCreateModal] = useState(false);
  const [openDeleteModal, setopenDeleteModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  //   new
  const performUpdate = (id, data) => {
    setInProgress(true);
    updateApi(id, data)
      .then((response) => {
        setInProgress(false);
        setopenUpdateModal(false);

        console.log(`${name} response `, response);
        performReload();
        dispatch(
          updateAlert({
            title: `${name} update`,
            message: `Updated ${name} successfully`,
            type: `success`,
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: `${name} update`,
            message: `An error occured while trying to ${name}`,
            type: `error`,
          })
        );
        setInProgress(false);
      });
  };

  const performCreate = (data) => {
    setInProgress(true);
    createApi(data)
      .then((response) => {
        setInProgress(false);
        setopenCreateModal(false);
        console.log(`Create response `, response);
        performReload();
        dispatch(
          updateAlert({
            title: `${name} Create`,
            message: `Created ${name} successfully`,
            type: `success`,
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: `${name} create`,
            message:
              err.message || `An error occured while trying to create ${name}`,
            type: `error`,
          })
        );
        setInProgress(false);
      });
  };

  const performDelete = (id) => {
    deleteApi(id)
      .then((response) => {
        console.log(`Delete result ,`, response.data);
        setopenDeleteModal(false);
        performReload();
        dispatch(
          updateAlert({
            title: `${name} delete`,
            message: `${name} deleted successfully`,
            type: `success`,
          })
        );
      })
      .catch((err) => {
        setopenDeleteModal(false);
        dispatch(
          updateAlert({
            title: `${name} delete`,
            message: `An error occured while trying to delete ${name}`,
            type: `error`,
          })
        );
      });
  };

  return (
    <div>
      {isLoaded ? (
        <div>
          <Button
            onClick={() => {
              setopenCreateModal(true);
            }}
            variant="contained"
          >
            {`Create new ${name}`}
          </Button>
          <List>
            {data.map((item, i) => (
              <ListItem
                key={i}
                secondaryAction={
                  <div>
                    <IconButton
                      onClick={() => {
                        setopenUpdateModal(true);
                        setSelectedData(item);
                      }}
                      sx={{
                        mr: 3,
                      }}
                      edge="end"
                      aria-label="edit"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setopenDeleteModal(true);
                        setSelectedData(item);
                      }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                }
              >
                {item.images && item.images[0] && (
                  <ListItemAvatar>
                    <Avatar
                      src={item.images[0].imageUrl}
                      alt={`${name} img`}
                    ></Avatar>
                  </ListItemAvatar>
                )}
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
          {openUpdateModal && (
            <UpdateModal
              schema={updateSchema}
              loading={inProgress}
              headerTitle={`${name} Update`}
              open={openUpdateModal}
              onClose={() => {
                setopenUpdateModal(false);
                setSelectedData(null);
              }}
              onSubmit={(data) => {
                performUpdate(selectedData.id, data);
              }}
            />
          )}

          {openCreateModal && (
            <UpdateModal
              schema={createSchema}
              loading={inProgress}
              headerTitle={`${name} Create`}
              open={openCreateModal}
              onClose={() => {
                setopenCreateModal(false);
              }}
              onSubmit={(data) => {
                performCreate(data);
              }}
            />
          )}

          {openDeleteModal && (
            <DeleteModal
              open={openDeleteModal}
              message={`Are you sure you want to delete , ${selectedData.title}`}
              onDelete={() => {
                setopenDeleteModal(false);
                performDelete(selectedData.id);
              }}
              onCancel={() => {
                setSelectedData(null);
                setopenDeleteModal(false);
              }}
            />
          )}
        </div>
      ) : (
        <AdminLoader />
      )}
    </div>
  );
}

export default DefaultDashboard;
