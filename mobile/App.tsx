import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
const App = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'http://localhost:3000' }}
                style={{ flex: 1 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default App;