import { Grid } from "@mui/material";
import Container from "../container";
import { wwrapperLayout } from "./layout.style";
import LeftMenu from "../leftMenu";
import RightSideBar from "../rightSideBar";

const Layout = ({ children }) => {
  return (
    <Grid sx={wwrapperLayout}>
      <Container>
        <LeftMenu />
        <Grid>{children}</Grid>
        <RightSideBar />
      </Container>
    </Grid>
  );
};
export default Layout;
