import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth";
import Home from "./components/Home";

const styles = {
  box: {
    background: "theme.palette.background.default",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const App = () => {
  return (
    <Box sx={styles.box}>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
