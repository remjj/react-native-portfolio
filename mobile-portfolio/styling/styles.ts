import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  //Switch Buttons
  switchContainer: {
    position: 'absolute',
    top: 45, 
    right: 30,
    width: 40, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30, 
    height: 30, 
  },
  toggleSwitch: {
    position: 'absolute',
    top: 40,  
    right: 10,
  },

  // Profile Container

  profileContainer: {
    alignItems: 'center',
    marginBottom: 100,  
  },

  profilePic: {
    width: 130,
    height: 140,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#000',
    position: 'absolute',
    top: 60, 
    zIndex: 2,
  },

  //Main Container
  container: {
    flex: 0.1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
   paragraph: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  mainBackground:{
    width: '90%',
    height: 400,
    backgroundColor: '#c7e9c0',
    borderRadius: 20,
    top: 100,
    paddingTop: 60, 
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  bioContainer: {
    justifyContent: 'center',
    marginLeft: 60,
  },
  positionHolder:{
     fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center',
  },
  userHandle:{
    fontSize: 11,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center',
  },
  bioText: {
    textAlign: 'justify',
    marginBottom: 10,
    padding: 30,
    fontSize: 15,
    fontWeight: '300',
  },

  // Dark Mode Container
  darkContainer: {
    flex: 0.1,
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  darkText: {
    color: '#FFF',
  },

  darkmainBackground:{
    width: '90%',
    height: 400,
    backgroundColor: '#00441B',
    borderRadius: 20,
    top: 100,
    paddingTop: 60, 
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },

  darkMProfilePic: {
    width: 130,
    height: 140,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFF',
    position: 'absolute',
    top: 60, 
    zIndex: 2,
  },
  
  darkProfileContainer:{
    alignItems: 'center',
    marginBottom: 100,  
  },
  
  //Scrolling
  scrollViewContent: {
    flexGrow: 1,  
    paddingBottom: 20,  
    paddingTop: 10,     
  },

  //Skills
  skillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: '#333', 
  },
  darkSkillTitle: {
    color: '#fff', 
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  skillBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    fontSize: 14,
    backgroundColor: '#f0f0f0', 
    color: '#000', 
  },
  darkSkillBox: {
    backgroundColor: '#333', 
    borderColor: '#fff',
    color: '#fff', 
  },

//Social Media Main Container

contactTitle:{
  fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: '#333', 
},

darkcontactTitle:{
  color: '#FFF',
},

contactContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },

  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#f8f8f8',
  },

  darkcontactCard: {
    borderColor: '#FFF',
  },

  contactIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
  },

  contactText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '500',
  },

  // Themed Contact Cards
  emailCard: {
      backgroundColor: '#3498db',
  },
  igCard: {
      backgroundColor: '#E1306C',
  },
  ghCard: {
      backgroundColor: '#333',
  },
  lkCard: {
      backgroundColor: '#0077B5',
  },

  // Project Section
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    color: "#333",
  },

  darkProjectTitle: {
    color: "#FFF",
  },


  innerCard: {
    width: '90%',
    alignContent: 'center',
    flexDirection: "row", 
    backgroundColor: "#c7e9c0",
    padding: 10,
    borderRadius: 10,
    alignItems: "center", 
    marginBottom: 10,
    borderWidth: 1, 
    borderColor: "#444",
    marginLeft: 20,
  },

  darkInnerCard: {
    backgroundColor: "#00441B",
    borderColor: "#FFF",
  },

  projectImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15, 
  },

  projectTextContainer: {
    flex: 1, 
    flexDirection: "column", 
  },

  projectTextTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },

  projectDescription: {
    fontSize: 12,
    color: "#000",
    marginRight: 160,
    padding: 25,
  },

  darkProjectDescription: {
    color: "#FFF",
  },

  //Footer Section
  //Horizontal Break
  horizontalBreak: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  footerText: {
    padding: 5,
    marginBottom: 15,
    textAlign: 'center',
  },

  //Dark Mode Footer
  footerTextDark:{
    color: '#FFF',
  }
});
