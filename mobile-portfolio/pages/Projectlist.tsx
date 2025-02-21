import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { styles } from "../styling/styles";
import ToggleSwitch from "../pages/ToggleSwitch"; 

interface ProjectListProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ darkMode, toggleDarkMode }) => {
  const projects = [
    { id: "1", title: "XtravaGala", image: require("../assets/project1.png") },
    { id: "2", title: "Le Sorelle", image: require("../assets/project2.png") },
    { id: "3", title: "Credibilia", image: require("../assets/project3.png") },
  ];

  return (
    <View style={[styles.projectContainer, darkMode && styles.darkContainer]}>
      <ToggleSwitch isEnabled={darkMode} toggleSwitch={toggleDarkMode} />
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectCard, darkMode && styles.darkCard]}>
            <View style={[styles.innerCard, darkMode && styles.darkInnerCard]}>
              <Image source={item.image} style={styles.projectImage} />
              <Text style={[styles.projectTitle, darkMode && styles.darkText]}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProjectList;
