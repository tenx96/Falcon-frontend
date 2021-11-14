import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import {
  createAnnouncementData,
  deleteAnnouncementData,
  updateAnnouncementData,
} from "api/announcementApi";
import { useAnnouncementReload } from "customHooks/data/useAnnouncementReload";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLoader from "routes/admin/AdminLoader";
import { updateAlert } from "store/alert";
import DeleteModal from "../modals/DeleteModal";
import UpdateModal from "../modals/UpdateModal";
import createSchema from "./createSchema.json";
import updateSchema from "./updateSchema.json";

export const ROUTE_ADMIN_ANNOUNCEMENTS = "/admin/announcements";
function AnnouncementAdmin() {
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  const [openUpdateModal, setopenUpdateModal] = useState(false);
  const [openCreateModal, setopenCreateModal] = useState(false);
  const [openDeleteModal, setopenDeleteModal] = useState(false);
  const [selectedAnn, setSelectedAnn] = useState(null);
  const [reload, setReload] = React.useState(false);

  //   new

  const annData = useSelector((state) => state.announcement);

  const submitUpdate = (id, data) => {
    setInProgress(true);
    updateAnnouncementData(id, data)
      .then((response) => {
        setInProgress(false);
        setopenUpdateModal(false);

        console.log("Update response ", response);
        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Announcement update",
            message: "Updated Announcement successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: "Announcement update",
            message: "An error occured while trying to Announcement",
            type: "error",
          })
        );
        setInProgress(false);
      });
  };

  const createNewAnnouncement = (data) => {
    setInProgress(true);
    createAnnouncementData(data)
      .then((response) => {
        setInProgress(false);
        setopenCreateModal(false);
        console.log("Create response ", response);
        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Announcement Create",
            message: "Created Announcement successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            title: "Announcement create",
            message:
              err.message ||
              "An error occured while trying to create Announcement",
            type: "error",
          })
        );
        setInProgress(false);
      });
  };

  const delAnnouncement = (id) => {
    deleteAnnouncementData(id)
      .then((response) => {
        console.log("Delete result ,", response.data);
        setopenDeleteModal(false);
        setReload(!reload);
        dispatch(
          updateAlert({
            title: "Announcement delete",
            message: "Announcement deleted successfully",
            type: "success",
          })
        );
      })
      .catch((err) => {
        setopenDeleteModal(false);
        dispatch(
          updateAlert({
            title: "Announcement delete",
            message: "An error occured while trying to delete Announcement",
            type: "error",
          })
        );
      });
  };

  useAnnouncementReload([reload]);

  return (
    <div>
      {annData.isLoaded ? (
        <div>
          <Button
            onClick={() => {
              setopenCreateModal(true);
            }}
            variant="contained"
          >
            Create New Announcement
          </Button>
          <List>
            {annData.announcements.map((item, i) => (
              <ListItem
                key={i}
                secondaryAction={
                  <div>
                    <IconButton
                      onClick={() => {
                        setopenUpdateModal(true);
                        setSelectedAnn(item);
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
                        setSelectedAnn(item);
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
                      alt="ann-img"
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
              headerTitle={"Announcement Update"}
              open={openUpdateModal}
              onClose={() => {
                setopenUpdateModal(false);
                setSelectedAnn(null);
              }}
              onSubmit={(data) => {
                submitUpdate(selectedAnn.id, data);
              }}
            />
          )}

          {openCreateModal && (
            <UpdateModal
              schema={createSchema}
              loading={inProgress}
              headerTitle={"Announcement Create"}
              open={openCreateModal}
              onClose={() => {
                setopenCreateModal(false);
              }}
              onSubmit={(data) => {
                createNewAnnouncement(data);
              }}
            />
          )}

          {openDeleteModal && (
            <DeleteModal
              open={openDeleteModal}
              message={`Are you sure you want to delete , ${selectedAnn.title}`}
              onDelete={() => {
                setopenDeleteModal(false);
                delAnnouncement(selectedAnn.id);
              }}
              onCancel={() => {
                setSelectedAnn(null);
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

export default AnnouncementAdmin;
