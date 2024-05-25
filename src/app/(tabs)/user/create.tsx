import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";

import { useThemeContext } from "@/src/hooks/useThemeContext";
import { usePeopleContext } from "@/src/hooks/usePeopleContext";

import InputRow from "@/src/components/user/InputRow";
import Button from "@/src/components/user/Button";

import { showToast } from '@/src/utils/showToast'
import { dateFormat } from "@/src/utils/dateFormat";
import { cpfFormat } from '@/src/utils/cpfFormat'
import { cepFormat } from "@/src/utils/cepFormat";
import { AdressType } from "@/src/@types/adress";

export default function create() {
  const { theme } = useThemeContext();
  const { pushPerson } = usePeopleContext()

  const [name, setName] = useState<string>('')
  const [CPF, setCPF] = useState<string>('')
  const [CEP, setCEP] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [birthday, setBirthday] = useState<Date | undefined>()

  const [endereco, setEndereco] = useState<AdressType>({
    rua: '',
    cidade: '',
    estado: ''
  })  

  function handleSubmit(){
    if(!!name && !!CPF && !!birthday && !!endereco.rua && !!endereco.cidade && !!endereco.estado){
      pushPerson({name, CPF, birthday, CEP, ...endereco})
      handleClear()
    }else{
      showToast("Preencha todos os campos primeiro!")
    }
  }

  function handleClear(){
    setName('')
    setCPF('')
    setDate('')
    setBirthday(undefined)
    setEndereco({rua: '',cidade: '',estado: ''})
  }

  function handleSetCPF(e: string){
    if(e.length === 11){
      setCPF(cpfFormat(e) as string)
    }else if(e.length < 11){
      setCPF(e)
    }
  }

  async function handleSetCEP(e: string){
    if(e.length === 8){
      let response = await cepFormat(e)
      setCEP(response.formatedCep)
      setEndereco(response.adress)
    }else if(e.length < 8){
      setCEP(e)
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

  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.bg}]}>
      <View style={[styles.contentContainer]}>
        <InputRow title="Nome" placeholder="Victor" value={name} setValue={setName}/>
        <InputRow title="CPF" placeholder="495864203-55" value={CPF} setValue={handleSetCPF}/>
        <InputRow title="Aniversário" placeholder="16/02/2007" value={date} setValue={handleSetDate}/>
        <InputRow title="CEP" placeholder="91420-270" value={CEP} setValue={handleSetCEP}/>
        <InputRow title="Rua" placeholder="Rua São Domingos" value={endereco.rua} editable={false}/>
        <InputRow title="Cidade" placeholder="Porto Alegre" value={endereco.cidade} editable={false}/>
        <InputRow title="Estado" placeholder="RS" value={endereco.estado} editable={false}/>
      <Button text="Salvar!" handleSubmit={handleSubmit}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    marginVertical: "25%",
    // backgroundColor: "red"
    alignItems: "center",
    justifyContent: "center",
  }
});