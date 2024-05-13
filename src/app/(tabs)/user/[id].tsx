import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '@/src/hooks/useThemeContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { usePeopleContext } from '@/src/hooks/usePeopleContext';
import { useState } from 'react';
import { showToast } from '@/src/utils/showToast';
import { cpfFormat } from '@/src/utils/cpfFormat';
import { dateFormat } from '@/src/utils/dateFormat';
import InputRow from '@/src/components/user/InputRow';
import Button from '@/src/components/user/Button';
import { formatNum } from '@/src/utils/formatNum';

export default function edit() {
 const { id } = useLocalSearchParams()
 const { theme } = useThemeContext();
 const { people, updatePerson } = usePeopleContext()
 const router = useRouter()

 const [name, setName] = useState<string>(people.find((person) => person.id === id)?.name as string)
 const [CPF, setCPF] = useState<string>(people.find((person) => person.id === id)?.CPF as string)
 const formatDate = (d: Date) => `${formatNum(d.getDay())}/${formatNum(d.getMonth())}/${d.getFullYear()}`
 const [date, setDate] = useState<string>(formatDate(people.find((person) => person.id === id)?.birthday as Date))
 const [birthday, setBirthday] = useState<Date | undefined>(people.find((person) => person.id === id)?.birthday as Date)

 function handleSubmit(){
   if(!!name && !!CPF && !!birthday){
     updatePerson({id: id as string, name, CPF, birthday,})
     handleClear()
     router.back()
   }else{
     showToast("Preencha todos os campos primeiro!")
   }
 }

 function handleClear(){
   setName('')
   setCPF('')
   setDate('')
   setBirthday(undefined)
 }

 function handleSetCPF(e: string){
   if(e.length === 11){
     setCPF(cpfFormat(e) as string)
   }else if(e.length < 11){
     setCPF(e)
   }
 }

 function handleSetDate(e: string){
   if(e.length === 8){
     setDate(dateFormat(e) as string)
     let dateString = dateFormat(e) as string
     let [day, month, year] = dateString.split('/')

     if((parseInt(day) > 31) || (parseInt(day) < 1)){
       showToast("Dia incorreto!")
       setDate('')
       return
     }
     if((parseInt(month) > 12) || (parseInt(month) < 1)){
       showToast("Mês incorreto!")
       setDate('')
       return
     }
     if((parseInt(year) < 1890) || (parseInt(year) > new Date().getFullYear())){
       showToast("Ano incorreto!")
       setDate('')
       return
     }
     
     let newDate = new Date(parseInt(year), parseInt(month), parseInt(day))
     setBirthday(newDate)
   }else if(e.length < 8 && date.indexOf("/") === -1){
     setDate(e)
   }else{
     setDate(e.slice(0, e.length))
   }
 }

 const handleGoBack = () => router.back()

 return (
   <View style={[styles.container, { backgroundColor: theme.bg }]}>
     <Button style={{ backgroundColor: "red", position: "absolute", top: "1%", }} text="Voltar!" handleSubmit={handleGoBack}/> 
     <InputRow title="Nome" placeholder="Victor" value={name} setValue={setName}/>
     <InputRow title="CPF" placeholder="495864203-55" value={CPF} setValue={handleSetCPF}/>
     <InputRow title="Aniversário" placeholder="16/02/2007" value={date} setValue={handleSetDate}/>
     <Button text="Alterar!" handleSubmit={handleSubmit}/>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
 },
});