import Preview from "./PDF/Preview";
import React, { useState } from "react";
function App() {
  const [profile, setProfile] = useState({
    type: "Profile",
    name: "John Doe",
    designation: "Junior Developer",
    profileImageURL: "https://i.imgur.com/f6L6Y57.png",
    display: true,
    employeeID: "001",
    BloodGroup: "O+",
    DOB: "01-02-1999",
    contact: "9040674463",
  });

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      {/* <div style={{ width: "50%" }}></div> */}
      <Preview profile={profile} />
    </div>
  );
}

export default App;
