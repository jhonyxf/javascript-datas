import assert from 'assert'

const date = new Date("2022-01-25 00:00") //node -p 'new Date("2022-01-25 00:00")'
//2022-01-25T03:00:00.000Z

const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/

const [full, year, month, day] = regex.exec(date.toISOString())

const actual = `${day}/${month}/${year}`
const expected = "25/01/2022"

assert.equal(actual, expected)


const options = {
    year:"numeric",
    month:"long",
    day:"numeric"
}

const data = date.toLocaleDateString("pt-br", options)
console.log(data)

//Para sobrescrever
const dataSubscrita = date.toLocaleDateString("pt-br", {
    ...options,
    month:"numeric"
})
console.log(dataSubscrita)

//Utilizando o Intl direto
const dataIntl = new Intl.DateTimeFormat("pt-br").format(date);
console.log(dataIntl)

//Utilizando o Intl direto e opções
const dataIntlOp = new Intl.DateTimeFormat("pt-br",{
    dateStyle:"full", timeStyle:"long"
}).format(date);
console.log(dataIntlOp)