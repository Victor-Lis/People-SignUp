import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '@/src/hooks/useThemeContext';
import { useLocalSearchParams } from 'expo-router';

export default function edit() {
 const { theme } = useThemeContext()
 const { id } = useLocalSearchParams()
 return (
   <View style={[styles.container, {backgroundColor: theme.bg}]}>
        <Text>Edit {id}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginTop: 10,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
})