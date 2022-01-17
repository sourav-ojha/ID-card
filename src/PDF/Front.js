import { View, Text, Image } from "@react-pdf/renderer";
import styles from "../styles";
import logo from "../hids_logo_dark.png";

export const Profile = ({ profile }) => {
  return (
    <View style={styles.profile_container}>
      <Image style={styles.logo_img} src={logo} />
      <View style={styles.card_content}>
        <Text style={styles.profile_name}>{profile.name}</Text>
        <Text style={styles.profile_designation}>{profile.designation}</Text>
      </View>
      <Image
        style={styles.profile_img}
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg"
      />
    </View>
  );
};

const Front = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  );
};

export default Front;
