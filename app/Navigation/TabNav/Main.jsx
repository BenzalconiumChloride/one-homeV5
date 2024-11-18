import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';
import BankCard from '../../../components/BankCard';
import { icons } from '../../../constants';
import { Image } from 'react-native';
import Reader from '../../../components/Reader';

const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={{ marginTop: -150 }}>
        <Image source={icons.bluelogoh} style={{ width: 200, height: 400, resizeMode: 'contain', alignSelf: 'center' }} />
        </View>

        <View style={{ marginTop: -150 }}>
          <BankCard />
        </View>

        <Reader />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main