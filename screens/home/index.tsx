// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
//   ScrollView,
  StatusBar,
  //   StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from '@gluestack-ui/themed';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const Home = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
       
      </ScrollView> */}
      <View>
        <Text>Hello home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
