import { AdressType } from "../@types/adress"

async function getAdress(cep: string){
    let data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    return {
        rua: data.logradouro,
        cidade: data.localidade,
        estado: data.uf,
    } as AdressType
}

export async function cepFormat(value: string) {
    let adress = await getAdress(value)
    return {
        formatedCep: value.replace(/^(\d{5})(\d{3})$/, "$1-$2"),
        adress,
    }
}
