import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AppMenu from "../AppMenu";

const AppBar = () => {
  return (
    <>
      <MuiAppBar
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "300px",
          height: "100%",
        }}
      >
        <Toolbar sx={{ height: "100%" }} variant="dense" disableGutters>
          <AppMenu />
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default AppBar;
