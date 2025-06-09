import { useEffect } from 'react';
import * as Font from 'expo-font';

export default function useCustomFonts() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Baloo2-Regular': require('../assets/Baloo2-Regular.ttf'),
        'Baloo2-Bold': require('../assets/Baloo2-Bold.ttf'),
        'Baloo2-SemiBold': require('../assets/Baloo2-SemiBold.ttf'),
        'Baloo2-ExtraBold': require('../assets/Baloo2-ExtraBold.ttf'),
      });
    }
    loadFonts();
  }, []);
}
