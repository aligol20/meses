/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Actions} from 'react-native-router-flux';
import {Router, Scene} from 'react-native-router-flux';
import React, { Component } from 'react';
import {Content,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import ActiveStraightSideLegRaise from './src/component/activeStraightSideLegRaise';
import ActiveStraightLegRaise from './src/component/activeStraightLegRaise';
import TrunkStabilityPushUp from './src/component/trunkStabilityPushUp';
import ShoulderMobility from './src/component/shouldermobility';
import RotaryStability from './src/component/rotaryStability';
import InLineLunge from './src/component/inLineLunge';
import HurdleStep from './src/component/hurdleStep';
import Begin from  './src/component/begin';
import DeepSquat from  './src/component/deepSquant';
import Result from './src/component/result';
import Details from './src/component/details';
type Props = {};
export default class App extends Component<Props> {
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);

    }
  render() {
    return (
        <Router backAndroidHandler={this.onBackPress}>
          <Scene key="root" navigationBarStyle={{backgroundColor:'yellow'}}  leftButtonIconStyle={{backgroundColor:'blue'}}
                 titleStyle={{color:'blue'}} leftButtonTextStyle={{color:"blue"}}>
            <Scene key="begin" component={Begin} title={"شروع" } titleStyle={{textAlign:'center',width:'91%',alignItems:'center',justifyContent:'center'}}/>
            <Scene key="details" component={Details} title="Details" />
            <Scene key="asl" component={ActiveStraightLegRaise} title="ActiveStraightLegRaise"/>
            <Scene key="result" component={Result} title="Result" />
            <Scene key="ds" component={DeepSquat} title="DeepSquat" />
            <Scene key="rs" component={RotaryStability} title="RotaryStability" />
            <Scene key="trunkspu" component={TrunkStabilityPushUp} title="TrunkStabilityPushUp" />
            <Scene key="sm" component={ShoulderMobility} title="ShoulderMobility" />
            <Scene key="ill" component={InLineLunge} title="InLineLunge" />
            <Scene key="hs" component={HurdleStep} title="HurdleStep" />
            <Scene key="assl" component={ActiveStraightSideLegRaise} title="ActiveStraightSideLegRaise" />
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
