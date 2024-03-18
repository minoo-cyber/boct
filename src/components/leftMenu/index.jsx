import {
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TelegramIcon from "@mui/icons-material/Telegram";
import PieChartIcon from "@mui/icons-material/PieChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import { wrapperSideBar } from "./leftMenu.style";
import CloseIcon from "@mui/icons-material/Close";

const LeftMenu = (props) => {
  const handleClose = () => {
    props.setMobileMenu(false);
  };
  return (
    <Grid className={props.mobileMenu ? "mobileNav" : ""} sx={wrapperSideBar}>
      <img src="assets/images/logo.jpg" alt="logo" />
      <button onClick={handleClose}>
        <CloseIcon />
      </button>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Home</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Explore</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NotificationsNoneIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Notifications</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Messages</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Buy Now</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TelegramIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Telegram</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Chart</NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink to="/">Github</NavLink>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Grid>
  );
};
export default LeftMenu;
