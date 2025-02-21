import { useState } from 'react';
import { styles } from './styling/styles';
import { Text, Image, View, ScrollView, TouchableOpacity, Linking, FlatList} from 'react-native';
import ToggleSwitch from './pages/ToggleSwitch';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  const projects = [
    { id: "1", title: "XtravaGala", image: require("./assets/project1.png"), description: 'XG or XtravaGala Event Management Services.' },
    { id: "2", title: "Le Sorelle", image: require("./assets/project2.png"), description: 'An inventory management system of the Le Sorelle Apparel Shop.'},
    { id: "3", title: "Credibilia", image: require("./assets/project3.png"), description: 'Credibilia serves as a reliable search engine that guarantees users obtain information from trustworthy sources.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <ToggleSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                
        {/* Main Background */}
          <View style={[styles.profileContainer, isDarkMode && styles.darkProfileContainer]}>
          <Image 
            style={[styles.profilePic, isDarkMode && styles.darkMProfilePic]}
            source={require('./assets/portfolio.jpg')}
          />
          <View style={[styles.mainBackground, isDarkMode && styles.darkmainBackground]}>
            <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
              Relli Emmanuel R. Javier
            </Text>
            <Text style={[styles.positionHolder, isDarkMode && styles.darkText]}>
              UI / UX Designer
            </Text>
            <Text style={[styles.userHandle, isDarkMode && styles.darkText]}>
              @remremmjj
            </Text>
            <Text style={[styles.bioText, isDarkMode && styles.darkText]}>
            I am Relli Emmanuel R. Javier, a Third Year Computer Science Student. I am a motivated student with strong skills in leadership, communication, and problem-solving. I take pride in my ability to effectively manage my time, balancing academic and extracurricular activities.
            </Text>
          </View>
        </View>


        {/* Skills */}
        <View>
        <Text style={[styles.skillTitle, isDarkMode && styles.darkSkillTitle]}>
            Key Competencies
          </Text>
          <View style={styles.skillContainer}>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>C++</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>JavaScript</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>HTML & CSS</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>React</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>Research</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>Teamwork</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>Leadership</Text>
            <Text style={[styles.skillBox, isDarkMode && styles.darkSkillBox]}>Communication Skills</Text>
          </View>
        </View>


        {/* Social Media Container */}
              <Text style={[styles.contactTitle, isDarkMode && styles.darkcontactTitle]}>
          Contact Me
      </Text>

      <View style={styles.contactContainer}>
          
          {/* Email Card */}
          <TouchableOpacity 
              style={[styles.contactCard, styles.emailCard, isDarkMode && styles.darkcontactCard]}
              onPress={() => Linking.openURL('mailto:remremjjavier@gmail.com')}>
              <Image style={styles.contactIcon} source={require('./assets/email.png')} />
              <Text style={styles.contactText}>remremjjavier@gmail.com</Text>
          </TouchableOpacity>

          {/* Instagram Card */}
          <TouchableOpacity 
              style={[styles.contactCard, styles.igCard, isDarkMode && styles.darkcontactCard]}
              onPress={() => Linking.openURL('https://www.instagram.com/remremmjj/?fbclid=IwZXh0bgNhZW0CMTEAAR1Nsbv9OvN_OQcFERBM43gcNdr5qxWwNEVqUp0HKmH9ZT7oTLQmL55DkFg_aem_oA5NiWA6m0vcJgG9cZ7SwQ')}>
              <Image style={styles.contactIcon} source={require('./assets/instagram.png')} />
              <Text style={styles.contactText}>Instagram - @remremmjj</Text>
          </TouchableOpacity>

          {/* GitHub Card */}
          <TouchableOpacity 
              style={[styles.contactCard, styles.ghCard, isDarkMode && styles.darkcontactCard]}
              onPress={() => Linking.openURL('https://github.com/remjj')}>
              <Image style={styles.contactIcon} source={require('./assets/github.png')} />
              <Text style={styles.contactText}>GitHub - remjj</Text>
          </TouchableOpacity>

          {/* LinkedIn Card */}
          <TouchableOpacity 
              style={[styles.contactCard, styles.lkCard, isDarkMode && styles.darkcontactCard]}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/relli-emmanuel-javier-2063b5273/')}>
              <Image style={styles.contactIcon} source={require('./assets/linkedin.png')} />
              <Text style={styles.contactText}>LinkedIn - Relli Emmanuel Javier</Text>
          </TouchableOpacity>

      </View>

      {/* Projects */} 
      <Text style={[styles.projectTitle, isDarkMode && styles.darkProjectTitle]}>
        List of Projects
      </Text>
        {projects.map((project) => (
          <View key={project.id} style={[styles.innerCard, isDarkMode && styles.darkInnerCard]}>
            <Image source={project.image} style={styles.projectImage} />
            <Text style={[styles.projectTextTitle, isDarkMode && styles.darkProjectTitle]}>
              {project.title}
            </Text>
            <Text style={[styles.projectDescription, isDarkMode && styles.darkProjectDescription]}>
              {project.description}
            </Text>
          </View>
        ))}



      {/* Footer */}
          <View>
            <View style={styles.horizontalBreak}></View>
            <Text style={[styles.footerText, isDarkMode && styles.footerTextDark]}>© Relli Emmanuel Javier 2025</Text>
          </View>
      </View>
    </ScrollView>
  );
}
