import { useThemeContext } from '@/src/hooks/useThemeContext';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputRowProps = {
  title: string,
  value: string,
  placeholder: string,
  editable?: boolean,
  setValue?: ((e: string) => void) | ((e: string) => Promise<void>) | React.Dispatch<React.SetStateAction<string>>;
}
export default function InputRow({title, value, placeholder, editable, setValue}: InputRowProps) {
 const { theme } = useThemeContext()
 return (
   <View style={[styles.row]}>
    <Text style={[styles.title, {color: theme.boxColor, borderColor: theme.boxColor}]}>{title}</Text>
    <TextInput editable={editable} placeholder={placeholder} placeholderTextColor={theme.placeholder} style={[styles.input, {backgroundColor: theme.secondBg, color: theme.text, borderColor: theme.text}]} value={value} onChangeText={(e) => setValue? setValue(e) : {}}/>
   </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: "75%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: "2.5%"
  },
  title: {
    paddingVertical: "1%",
    paddingHorizontal: "2.5%",
    width: "40%",
    textAlign: "center",
    fontSize: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1.5,
  },
  input: {
    width: "60%",
    paddingVertical: "1%",
    paddingHorizontal: "2.5%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
  }
})