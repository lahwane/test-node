let greet = 'Hello'
console.log(`${greet} Node!`)


//* Missing stuff...
// alert('Hola!')
// console.log('No Window', window)
// console.log('No Document?', document)


//* App ends after 2.5 secs
// setTimeout(() => {
//     greet = 'Goodbye'
//     console.log(`${greet} Node!`)
// }, 2500);


//* App that never end:
setInterval(() => {
    console.log(greet += '!')
}, 1000);