export const wrapperSideBar = {
  "& button": {
    position: "absolute",
    right: "10px",
    top: "10px",
    display: "none",
  },
  "& img": {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
  },
  "& svg": {
    color: "#ffffff",
  },
  "& a": {
    color: "#ffffff",
    opacity: "0.6",
    fontSize: "17px",
  },
  "& li": {
    padding: "15px 0",
  },
  "@media (max-width:668px)": {
    "& button": {
      display: "block",
    },
  },
};
