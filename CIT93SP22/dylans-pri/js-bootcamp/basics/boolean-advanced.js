let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log ('welcome admin')
} else {
console.log('welcome')
} 

// challenge area

let temp = 4

if (temp <= 32) {
    console.log('It is freezing outside')
} else if (temp>= 110) {
    console.log('it is hot outside')
}  else {
    console.log('go for it. it is nice out')
}