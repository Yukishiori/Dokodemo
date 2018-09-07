import { ViewStyle, TextStyle, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get('window');
const Map: ViewStyle = {
    width,
    height
};

const Header: ViewStyle = {
    width,
    flexDirection: 'row',
    position: 'absolute',
    height: height === 812 ? '125%' : '100%',
    marginTop: Platform.OS === 'ios' ? (height === 812 ? 30 : 20) : 0,
    paddingHorizontal: '5%',

};

const BigContainer: ViewStyle = {
  minHeight: '100%',
  marginTop: 20
}

const BigLinearGradient: ViewStyle = {
  minHeight: '100%',
  padding: 20,
}

const ShowSchedule: ViewStyle = {
    borderRadius: height * 0.1,
    width: width * 0.5,
    paddingVertical: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
}

const SumsContainer: ViewStyle = {
  marginVertical: 40,
  width: width * 0.75 + 10,
  height: height / 4,
  borderRadius: 15,
  backgroundColor: 'white',
  padding: 10,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignSelf: 'center'
}

const GoButton: ViewStyle = {
  marginHorizontal: 15,
  borderRadius: 15,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20
}

const EstimateTime: TextStyle = {
  alignSelf: 'center',
  fontWeight: 'bold'
}

export default {
    Map,
    Header,
    ShowSchedule,
    BigContainer,
    BigLinearGradient,
    SumsContainer,
    GoButton,
    EstimateTime
}