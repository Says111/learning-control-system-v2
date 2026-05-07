import { Box, Button } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DvrIcon from "@mui/icons-material/Dvr"; //monitor
import AssessmentIcon from "@mui/icons-material/Assessment"; //report
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";

const MENU_ITEMS = [
  { key: "HOME", label: "Home", icon: <HomeIcon /> },
  { key: "STUDENTS", label: "Students ", icon: <GroupsIcon /> },
  { key: "TEACHERS", label: "Teachers", icon: <GroupIcon /> },
  { key: "SCHEDULE", label: "Schedule", icon: <CalendarMonthIcon /> },
  { key: "MONITORING", label: "Monitoring", icon: <DvrIcon /> },
  { key: "REPORTS", label: "Reports", icon: <AssessmentIcon /> },
  {
    key: "NOTIFICATIONS",
    label: "Notifications",
    icon: <NotificationsNoneIcon />,
  },
  { key: "SETTINGS", label: "Settings", icon: <SettingsIcon /> },
];

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    mx: 2,
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "start",
    alignItems: "center",
    my: 5,
  },
  list: {
    width: "100%",
    flexGrow: 1,
  },
  avatarBox: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    m: 2,
    alignItems: "center",
  },
};

const AppMenu = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleBox}>
        <SchoolIcon fontSize="large" />
        <Typography variant="h4">EduPortal</Typography>
      </Box>

      <List sx={styles.list}>
        {MENU_ITEMS.map((item) => (
          <ListItem key={item.key} sx={{ color: "text.secondary" }}>
            <ListItemButton onClick={() => {}}>
              <ListItemIcon sx={{ color: "text.secondary" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* </Box> */}
      <Box sx={styles.avatarBox}>
        <Avatar
          sx={{
            color: "primary.contrastText",
          }}
        >
          СМ
        </Avatar>
        <Box>
          <Typography key={"role"} variant="subtitle2">
            Студент
          </Typography>
          <Typography key={"login"} variant="caption">
            Саида Муртазова
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppMenu;
