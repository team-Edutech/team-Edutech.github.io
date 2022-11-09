import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, {hidden, backgroundColor}: {hidden :boolean; backgroundColor: string}) => ({
  main: {
    position: "absolute",
    width: "100%",
    height: "80px",
    left: "0px",
    top: "0px",

    "@media screen and (max-width: 960px)": {
      display: "none"
    },
  },

  mainMobile: {
    display: "none",

    "@media screen and (max-width: 960px)": {
      display: hidden ? "none": "block",
      position: "absolute",
      width: "100%",
      left: "0px",
      top: "0px",
      // backgroundColor: "rgba(0, 0, 0, 0.3)",
      backgroundColor: backgroundColor,
      borderStyle: backgroundColor === "#FFFFFF"? "1px solid #E4E4E4" : "none",
    },
  },

  line: {
    position: "absolute",
    width: "1440px",
    height: "0px",
    left: "0px",
    top: "80px",
    border: "1px solid #E4E4E4",
  },

  biContainer: {
    padding: "0px",
  },

  bi: {
    width: "225px",
    height: "32px",

    "@media screen and (max-width: 960px)": {
      display: "none",
    },
  },

  biMobile: {
    display: "none",

    "@media screen and (max-width: 960px)": {
      position: "absolute",
      display: "block",
      width: "175.72px",
      height: "25px",
      left: "5.333vw",
      top: "39px",
    },
  },

  middleLinkGroup: {
    height: "24px",
    columnGap: "40px",
    alignItems: "center",
    justifyContent: "space-between",

    "@media (max-width: 960px)": {
      display: "none",
    },
  },

  middleLinkGroupMobile: {
    display: "none",

    "@media (max-width: 960px)": {
      position: "absolute",
      display: "flex",
      flexWrap: "nowrap",
      width: "100%",
      top: "80px",
      left: "0",
      columnGap: "8px",
      height: "55px",
      alignItems: "center",
      justifyContent: "space-around",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },

    "@media (max-width: 400px)": {
      columnGap: "2px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
  },

  rightLinkGroup: {
    width: "auto",
    height: "auto",
    top: "28px",
    alignItems: "flex-start",
    alignContent: "center",
    columnGap: "32px",

    "@media screen and (max-width: 960px)": {
      display: "none",
    },

  },

  dropdown: {
    position: 'absolute',
    top: "80px",
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    backgroundColor: "#002B7C",
    borderStyle: "none",

    "@media screen and (min-width: 960px)": {
      display: 'none',
    },
  },

  header: {
    maxWidth: "1168px",
    width: "90%",
    margin: "0 auto",
    paddingTop: "24px",
    paddingLeft: "2.153vw",
    paddingRight: "2.569vw",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',

  },

  burger: {
    display: "none",

    "@media screen and (max-width: 960px)": {
      position: "absolute",
      display: "block",
      width: "18px",
      height: "3px",
      top: "48px",
      right: "5.6vw",
    },
  },

  middleLink: {
    display: "block",
    height: "24px",
    left: "0%",
    right: "77.66%",
    top: "calc(50% - 24px/2)",

    margin: "0px 0px",
    textDecoration: "none",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#3F3F3F",
    boxSizing: "border-box",
    letterSpacing: "-1px",

    "@media screen and (max-width: 960px)": {
      fontWeight: 700,
      fontSize: "14px",
      color: "rgba(255, 255, 255, 0.5)",
      borderRadius: 0,
      marginTop: "14px",
      marginBottom: "17px",
      wordBreak: "keep-all",
    },

    "@media screen and (max-width: 400px)": {
      fontSize: "12px",
    },
  },

  rightLink: {
    display: "block",
    height: "24px",
    left: "0%",
    right: "77.66%",
    top: "calc(50% - 24px/2)",
    
    margin: "0px",
    textDecoration: "none",
    fontFamily: "NotoSansKR",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "24px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#363636",
    boxSizing: "border-box",
    letterSpacing: "-0.699px",

    "@media screen and (max-width: 960px)": {
      borderRadius: 0,
      fontWeight: 700,
      fontSize: "14px",
      color: "rgba(255, 255, 255, 0.5)",
      marginTop: "14px",
      marginBottom: "17px",
      paddingTop: 0
    },
  },

  align: {
    paddingTop: 2.5
  },

  linkActive: {
    "&": {
      color: "#0094FF",
    },
    "@media screen and (max-width: 960px)": {
       "&": {
        color: "#FFFFFF",
      },
    },
  },

}));

export default useStyles;
