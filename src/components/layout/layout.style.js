export const wwrapperLayout = {
  "&>div": {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "&>div:first-of-type": {
      position: "fixed",
    },
    "&>div:nth-of-type(2)": {
      width: "calc(100% - 550px)",
      marginRight: "40px",
    },
    "&>div:last-of-type": {
      maxWidth: "350px",
    },

    "&>div": {
      flex: "1 0 auto",
      margin: "10px",
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
      "&>div:nth-of-type(2)": {
        paddingLeft: "0",
      },
      "&>div:last-of-type": {
        paddingLeft: "150px",
      },
    },
  },
};
