import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer:{
    width: '100%',
    height: '100%',
  },

  titles:{
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
  },

  subtitle: {
    fontSize: 40,
    fontWeight: '200',
    color:'white',
  },

  subtext: {
    marginTop: '120%',
    fontSize: 30,
    color:'white',
    textAlign:'center',
  },

  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  }

});

export default styles;