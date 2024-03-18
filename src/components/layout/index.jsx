import { Grid } from "@mui/material";
import Container from "../container";
import { wwrapperLayout } from "./layout.style";
import LeftMenu from "../leftMenu";
import RightSideBar from "../rightSideBar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenu = () => {
    setMobileMenu(true);
  };

  return (
    <Grid sx={wwrapperLayout}>
      <Container>
        <button onClick={handleMenu}>
          <MenuIcon />
        </button>
        <LeftMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <Grid>{children}</Grid>
        <RightSideBar />
      </Container>
    </Grid>
  );
};
export default Layout;
