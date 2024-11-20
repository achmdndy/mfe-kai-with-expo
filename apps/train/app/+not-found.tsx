import { Link, Stack } from 'expo-router';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text >This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text >Go to home screen!</Text>
        </Link>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
