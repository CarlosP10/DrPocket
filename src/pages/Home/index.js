import {Text, View} from 'react-native';

import Footer from '@components/footer';
import React from 'react';
import {WebView} from 'react-native-webview';

const index = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingBottom:1, paddingTop:1}}>
        <WebView
          source={{uri: 'http://drpocketrapp.epizy.com'}}
          // style={{marginTop: 10}}
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default index;
