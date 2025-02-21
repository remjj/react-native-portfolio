import { TouchableOpacity, Image, GestureResponderEvent } from 'react-native';
import { styles } from '../styling/styles';

interface ToggleSwitchProps {
  isDarkMode: boolean;
  toggleTheme: (event: GestureResponderEvent) => void;
}

const ToggleSwitch = ({ isDarkMode, toggleTheme }: ToggleSwitchProps) => {
  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.switchContainer}>
      <Image
        source={
          isDarkMode
            ? require('../assets/sun.png') 
            : require('../assets/moon.png')  
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
