import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string | unknown) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch (e) {
    return false;
  }
};

export const getData: <T>(key: string) => Promise<T | null> = async <T>(
  key: string
) => {
  try {
    const value = await AsyncStorage.getItem(key);

    console.log(key, value);

    if (value !== null) {
      const object = JSON.parse(value);

      if (!object) {
        return null;
      }

      return object as T;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
