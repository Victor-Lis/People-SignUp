import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useThemeContext } from '@/src/hooks/useThemeContext';

export default function app() {
 const { theme } = useThemeContext()
 return (
   <View style={[styles.container, {backgroundColor: theme.bg}]}>
    <Link href={"/user/edit"}>User Edit</Link>
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