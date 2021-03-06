import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { common, variable } from '../../styles/index';
import Header from '../../components/widget/Header';
import Bookcase from '../../components/bookcase/index';
import ChickenSoupCard from '../../components/chicken-soup-card/index';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Desk extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={[common.flex(), common.bgc()]}>
        <Header
          title='书架'
          left={
            <Icon
              name='bars'
              style={common.fontColorSize(variable.$main_color_primary)}
            />
          }
          right={
            <Text
              style={common.fontColorSize(variable.$main_color_primary, 16)}
            >
              书城
            </Text>
          }
          onLeftPress={navigation.openDrawer}
          onRightPress={() => {
            navigation.replace('Library');
          }}
        />
        <View style={common.mVerticalHorizontal(16, 16)}>
          <ChickenSoupCard />
          <Bookcase navigation={navigation} />
        </View>
      </View>
    );
  }
}
