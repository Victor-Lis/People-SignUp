import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '@/src/hooks/useThemeContext';

export default function create() {
 const { theme } = useThemeContext()
 return (
   <View style={[styles.container, {backgroundColor: theme.bg}]}>
    <Text>Create</Text>
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