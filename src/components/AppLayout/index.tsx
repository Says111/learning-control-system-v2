import React from "react";
import Box from "@mui/material/Box";

import AppBar from "../AppBar";

interface Props {
  children: React.ReactNode;
}
const AppLayout = ({ children }: Props) => {
  return (
    // логика такая, что AppLayout будет обьявлятся на всех страницах , т.е. этот компонент юзается со всеми отстальными основ. компонентами,
    //  и эти основ. компоненты передаюся как child в этот AppLayout
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <AppBar />
      <Box>{children}</Box>
    </Box>
  );
};
export default AppLayout;
