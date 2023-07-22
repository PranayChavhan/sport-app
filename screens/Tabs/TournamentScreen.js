//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import Topbar from '../../components/TopBar';

// create a component
const TournamentScreen = () => {
    return (
        <View className="bg-white flex-1">
        <Topbar/>
        <Text>TournamentScreen</Text>
    </View>
    );
};


export default TournamentScreen;
