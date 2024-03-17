export const wrapperPost = {
  paddingLeft: "240px",
  "&>div": {
    padding: "25px 0",
    borderBottom: "1px solid #393737",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  "@media (max-width:668px)": {
    paddingLeft: "150px",
  },
};
export const wrapperHeader = {
  display: "flex",
  "& img": {
    margin: "7px 10px 0 0",
    width: "64px",
  },
  "& p": {
    lineHeight: "1.7",
  },
  "& span": {
    opacity: "0.6",
  },
  "@media (max-width:668px)": {
    flexWrap: "wrap",
  },
};

export const wrapperBody = {
  textAlign: "center",
  "& img": {
    maxWidth: "100%",
    maxHeight: "400px",
    borderRadius: "30px",
  },
};

export const wrapperFooter = {
  display: "flex",
  justifyContent: "space-between",
  "& span": {
    cursor: "pointer",
    opacity: "0.7",
    "&:hover": {
      "&:nth-of-type(1)": {
        color: "#e67e22",
      },
      "&:nth-of-type(2)": {
        color: "#1abc9c",
      },
      "&:nth-of-type(3)": {
        color: "#f1c40f",
      },
      "&:nth-of-type(4)": {
        color: "#e74c3c",
      },
    },
    "& em": {
      marginRight: "10px",
      fontSize: "1.4rem",
    },
  },
};
