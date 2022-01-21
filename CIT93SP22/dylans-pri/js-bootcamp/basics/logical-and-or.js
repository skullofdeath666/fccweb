let temp = 55

// logical and operator - true if both sides are true. false otherwise
// logical and operator - true if at least one side is true. false otherwise

if (temp >= 60 && temp <= 90) {
 console.log('it is pretty nice out')
}

if (temp <= 0  || temp >= 120) {
    console.log('do not go outside')
} else {
    console.log('eh. do what you want')
}

// challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer up some vegan options.')
} else {
    console.log('offer up anything on the menu')
}