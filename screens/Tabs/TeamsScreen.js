//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import Topbar from '../../components/TopBar';

// create a component
const TeamsScreen = () => {
    return (
        <View className="bg-white flex-1">
            <Topbar/>
            <Text>TeamScreen</Text>
        </View>
    );
};

export default TeamsScreen;
