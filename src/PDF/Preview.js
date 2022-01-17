import React from "react";
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Front from "./Front";
import Back from "./Back";
import styles from "../styles";

const Preview = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={true}
        style={{
          width: "100%",
          height: "95%",
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName="somename.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
};
// Create Document Component
const Template = ({ profile }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* // We will divide our document into 2 columns */}
        <Front profile={profile} />
      </Page>
      <Page size="A4" style={styles.page}>
        {/* // We will divide our document into 2 columns */}
        <Back about={profile.DOB} />
      </Page>
    </Document>
  );
};

export default Preview;
