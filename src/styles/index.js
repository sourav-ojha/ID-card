import { StyleSheet, Font } from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: `/fonts/Roboto-Black.ttf`,
    },
    {
      src: `/fonts/Roboto-Bold.ttf`,
      fontWeight: "bold",
    },
    {
      src: `/fonts/Roboto-Light.ttf`,
      fontWeight: "light",
    },
  ],
});

export default StyleSheet.create({
  page: {
    width: "100%",
  },

  section_left: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  profile_container: {
    // display: "flex",
    // flexDirection: "column",
    width: "7.5cm",
    border: "1px solid black",
    alignItems: "center",
    marginTop: "20",
    marginBottom: "20px",
    height: "12cm",
    // fontFamily: "Roboto",
    position: "relative",
    // justifyContent: "space-evenly",
  },

  logo_img: {
    position: "absolute",
    bottom: "10px",
    height: "80px",
    width: "250px",
    objectFit: "contain",
  },

  profile_img: {
    width: "100px",
    height: "100px",
    position: "absolute",
    top: "25px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  card_content: {
    position: "absolute",
    top: "150px",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  profile_name: {
    fontFamily: "Roboto",
    padding: "5px",
    fontWeight: "bold",
  },
  profile_designation: {
    fontFamily: "Roboto",
    fontWeight: "light",
  },

  profile_line: {
    marginTop: "10px",
    width: "10%",
    height: "1px",
    backgroundColor: "#FFF",
    textAlign: "center",
  },
});
