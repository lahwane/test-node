import fs from 'fs'
import chalk from 'chalk'
import { utilService } from './services/util.service.js'

global.baba = '***BABA***'

const pets = utilService.readJsonFile('data/pet.json')

export const petService = {
    sayHello,
    getAns,
    getPets,
    addPet
}


function sayHello() {
    const times = 3
    console.log(chalk.bold.underline('Hello '.repeat(times) + 'Pets!'))
}


function getAns() {
    return utilService.httpGet('https://yesno.wtf/api')
}

function getPets() {
    return pets

}

function addPet() {
    const newPet = { name: 'Yoyo Bigel', score: 88 }
    pets.push(newPet)
    return utilService.writeJsonFile('data/pet.json', pets)
}