import React, { Component } from 'react';
import {
  Text, Image, Dimensions,
  View, StyleSheet
} from 'react-native';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../../components/AppText';
import { gradient } from '../../commonStyle';
import styles from './styles';
import ScreenNames from '../ScreenNames';
import { connect } from 'react-redux';

interface IProps extends NavigationScreenProps {
  changeEmail: any;
  login: any;
  changePassword: any;
  email: string;
  password: string;
  retriveDataSuccess: any;
  createOrUpdateFirebaseUser: any;
}

class SplashScreen extends Component<IProps> {
  componentDidMount() {
    // firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(res => {
      if (res) {
        if (res.providerData && res.providerData.length) {
          this.props.createOrUpdateFirebaseUser({result: {
            email: res.providerData[0].email,
            displayName: res.providerData[0].displayName,
            photoURL: res.providerData[0].photoURL
          }, uid: res.uid});
        }
        firebase.firestore().collection('users').doc(res.uid).get().then((doc) => {
          if(doc.exists) {
            this.props.retriveDataSuccess({result : doc.data(), uid: res.uid});
          } else {
            Alert.alert(
              'Cannot fetch data, please log out and try again!',
              "",
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
          }
          setTimeout(() => this.props.navigation.navigate(ScreenNames.RestScreen), 500)
        })
      } else {
        setTimeout(() => this.props.navigation.navigate('Auth'), 500)
      }
    })
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.BackgroundGradient}>
          <AppText style={{ fontSize: 30, color: 'white' }}>Dokodemo</AppText>
        </LinearGradient>
      </View>
    );
  }
}


const mapState = (rootState: any) => {
  return {
    ...rootState.profileModel
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    ...rootReducer.profileModel,
  };
};

export default connect(mapState, mapDispatch)(SplashScreen);