import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'

const SplashScreen = (props) => {
    return (
        <View style={styles.carContainer}>

        <Image
        source={require('../../assets/images/AGW_badge.png')}
        style={styles.image}
        />
        
        <View style={styles.titles}>
            <Text style={styles.title}>AGW</Text>
            <Text style={styles.subtitle}>DETAILING</Text>
            <Text style={styles.subtext}>Paint Protection Specialists Based In Essex</Text>
        </View>
        </View>

    );
};

export default SplashScreen;