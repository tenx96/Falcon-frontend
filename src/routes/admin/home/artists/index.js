import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { deleteArtistData } from "api/artistsApi";
import { updateArtistData } from "api/artistsApi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLoader from "routes/admin/AdminLoader";
import { updateAlert } from "store/alert";
import DeleteModal from "../modals/DeleteModal";
import UpdateModal from "../modals/UpdateModal";
import { useArtistReload } from "customHooks/data/useArtistReload";
import { Button } from "@mui/material";

import updateSchema from "./updateSchema.json";
import createSchema from "./createSchema.json";
import { createArtistData } from "api/artistsApi";

export const ROUTE_ADMIN_ARTIST = "/admin/artist";
function ArtistAdmin() {
  const dispatch = useDispatch();
  const artistData = useSelector((state) => state.artist);
  const [inProgress, setInProgress] = useState(false);
  const [openUpdateModal, setopenUpdateModal] = useState(false);
  const [openCreateModal, setopenCreateModal] = useState(false);
  const [openDeleteModal, setopenDeleteModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [reload, setReload] = React.useState(false);

  const submitUpdate = (id, data) => {
    setInProgress(true);
    updateArtistData(id, data)
      .then((response) => {
        setInProgress(false);
        setopenUpdateModal(false);

        console.log("Update response ", response);
        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Artist update",
            message: "Updated artist successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: "Artist update",
            message: "An error occured while trying to update artist",
            type: "error",
          })
        );
        setInProgress(false);
      });
  };

  const createNewArtist = (data) => {
    setInProgress(true);
    createArtistData(data)
      .then((response) => {
        setInProgress(false);
        setopenCreateModal(false);

        console.log("Create response ", response);
        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Artist Create",
            message: "Created artist successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: "Artist create",
            message:
              err.message || "An error occured while trying to create artist",
            type: "error",
          })
        );
        setInProgress(false);
      });
  };

  const deleteArtist = (id) => {
    deleteArtistData(id)
      .then((response) => {
        console.log("Delete result ,", response.data);
        setopenDeleteModal(false);

        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Artist delete",
            message: "Artist deleted successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        setopenDeleteModal(false);
        dispatch(
          updateAlert({
            title: "Artist delete",
            message: "An error occured while trying to delete artist",
            type: "error",
          })
        );
      });
  };

  useArtistReload([reload]);

  return (
    <div>
      {artistData.isLoaded ? (
        <div>
          <Button
            onClick={() => {
              setopenCreateModal(true);
            }}
            variant="contained"
          >
            Create New Artist
          </Button>
          <List>
            {artistData.artists.map((item, i) => (
              <ListItem
                key={i}
                secondaryAction={
                  <div>
                    <IconButton
                      onClick={() => {
                        setopenUpdateModal(true);
                        setSelectedArtist(item);
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
                        setSelectedArtist(item);
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
                      alt="artist-img"
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
              headerTitle={"Artist Update"}
              open={openUpdateModal}
              onClose={() => {
                setopenUpdateModal(false);
                setSelectedArtist(null);
              }}
              onSubmit={(data) => {
                submitUpdate(selectedArtist.id, data);
              }}
            />
          )}

          {openCreateModal && (
            <UpdateModal
              schema={createSchema}
              loading={inProgress}
              headerTitle={"Artist Create"}
              open={openCreateModal}
              onClose={() => {
                setopenCreateModal(false);
              }}
              onSubmit={(data) => {
                createNewArtist(data);
              }}
            />
          )}

          {openDeleteModal && (
            <DeleteModal
              open={openDeleteModal}
              message={`Are you sure you want to delete , ${selectedArtist.title}`}
              onDelete={() => {
                setopenDeleteModal(false);
                deleteArtist(selectedArtist.id);
              }}
              onCancel={() => {
                setSelectedArtist(null);
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

export default ArtistAdmin;
