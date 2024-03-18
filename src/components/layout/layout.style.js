export const wwrapperLayout = {
  "&>div": {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "&>div:first-of-type": {
      position: "fixed",
      minHeight: "100vh",
      transition: "all 300ms",
    },
    "&>div:first-of-type.mobileNav": {
      left: "0",
    },
    "&>div:nth-of-type(2)": {
      width: "calc(100% - 550px)",
      marginRight: "40px",
      paddingLeft: "200px",
    },
    "&>div:last-of-type": {
      maxWidth: "350px",
    },

    "&>div": {
      flex: "1 0 auto",
      margin: "10px",
    },
    "&>button": {
      color: "#ffffff",
      position: "absolute",
      left: "10px",
      top: "10px",
      width: "20px",
      height: "20px",
      display: "none",
    },
    "@media (max-width:998px)": {
      "&>div:nth-of-type(2)": {
        width: "calc(100% - 150px)",
      },
      "&>div:last-of-type": {
        maxWidth: "95%",
        paddingLeft: "240px",
      },
    },
    "@media (max-width:668px)": {
      "&>button": {
        display: "block",
      },
      "&>div:first-of-type": {
        left: "-220px",
        background: "#16181c",
        margin: "0",
        padding: "20px",
        zIndex: "1",
        width: "220px",
      },
      "&>div:nth-of-type(2)": {
        paddingLeft: "0",
      },
      "&>div:last-of-type": {
        paddingLeft: "0",
      },
    },
  },
};
