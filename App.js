import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { students } from "./Data/data";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containers}>
        <Text style={styles.names}>LIST OF GUESTS</Text>
        <ScrollView>
          {students.map((student) => {
            return (
              <View key={student.id}>
                <Text style={styles.name}>
                  {student.name.lastname},{student.name.firstname}
                  {student.name.middlename ? `, ${student.name.middlename}.` : ''}
                </Text>
                <Text style={styles.address}>{student.address}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",

  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  names: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 40,
  },
  address: {
    color: "black",
    fontSize: 15,
    marginBottom: 15,
  },
  containers: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: 20,
    gap: 50,
  },
});
