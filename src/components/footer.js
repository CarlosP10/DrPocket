import {TouchableOpacity, View} from 'react-native';

import {Icon} from 'react-native-elements';
import React from 'react';
import styles from './styles/footer';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <Icon type="font-awesome-5" name="comments" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type="font-awesome-5" name="calendar" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type="font-awesome-5" name="video" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
