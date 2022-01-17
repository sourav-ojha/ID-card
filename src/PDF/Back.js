import styles from "../styles";
import { View, Text } from "@react-pdf/renderer";

export const Back = ({ about }) => {
  return (
    <View style={styles.section_right}>
      <Text>{about}</Text>
    </View>
  );
};

export default Back;
