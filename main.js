// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}



// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

//kata 0
const greenEyes = users.filter(user => user.eyeColor === "green")
const greenEyesName = greenEyes.map(greenEyes => greenEyes.name)
printKata(0, greenEyesName)

//kata 1
const active = users.filter(user => user.isActive)
const activeName = active.map(active => active.name)
printKata(1, activeName)

//kata 2
const email = users.map(user => user.email)
printKata(2, email)

//kata 3
const kata3 = users.some(user => user.company === "OVATION")
printKata(3, kata3)

//kata 4
const kata4 = users.find(user => user.age >= 38)
const kata4Name = kata4.name
printKata(4, kata4Name)

//kata5
const kata5 = users.filter(user => user.isActive)
const kata5Filter = kata5.find(kata5 => kata5.age >= 38)
const kata5FilterName = kata5Filter.name
printKata(5, kata5FilterName)

//kata 6
const kata6 = users.filter(user => user.company === "ZENCO")
const kata6Result = kata6.map(kata6 => kata6.balance)
printKata(6, kata6Result)

//kata 7
const kata7 = users.filter(user => user.tags.includes("fugiat"))
const kata7Result = kata7.map(kata7 => kata7.age)
printKata(7, kata7Result)