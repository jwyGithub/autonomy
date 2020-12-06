/*
 * @Descripttion:
 * @version:
 * @Author: jwy
 * @Date: 2020-12-05 19:18:13
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-05 22:09:38
 */
import React from 'react';
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  NativeModules,
  StatusBar,
} from 'react-native';
const {StatusBarManager} = NativeModules;
// 获取状态栏高度
let statusBarHeight;
if (Platform.OS === 'ios') {
  StatusBarManager.getHeight((height) => {
    statusBarHeight = height;
  });
} else {
  statusBarHeight = StatusBar.currentHeight;
}

const App = () => {
  return (
    <SafeAreaView style={{marginTop: statusBarHeight.height}}>
      <View>
        <Text>welcome11111</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
