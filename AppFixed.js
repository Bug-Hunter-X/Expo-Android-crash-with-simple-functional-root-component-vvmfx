import { registerRootComponent } from 'expo';
import React from 'react';
import {View, Text} from 'react-native';

function App(){
    // ... other code
    return (
        <View>
          <Text>Hello world!</Text>
        </View>
    );
}

registerRootComponent(<React.Fragment><App /></React.Fragment>);
// Alternative Solution using a simple view
// registerRootComponent(<View><App /></View>);