const jmespath= require("jmespath");
const result = jmespath.search({
    a:"dalong"
},"a")
console.log(`a ${result}`)


const result2 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6]
},"userids[0]")

console.log(`array index 0 ${result2}`)

const result3 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6]
},"userids[0:2]")

console.log(`array slice 0:2 ${result3}`)


const result4 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6],
    people: [
        {"first": "James", "last": "d"},
        {"first": "Jacob", "last": "e"},
        {"first": "Jayden", "last": "f"},
        {"missing": "different"}
      ]
},"people[*].first")

console.log(`array slice 0:2 ${JSON.stringify(result4)}`)


const result5 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6],
    people: [
        {"first": "James", "last": "d","age":90},
        {"first": "Jacob", "last": "e","age":40},
        {"first": "Jayden", "last": "f"},
        {"missing": "different"}
      ]
},"people[?age>'10'][first,age]")

console.log(`array filter  ${JSON.stringify(result5)}`)


const result6 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6],
    people: [
        {"first": "James", "last": "d","age":90},
        {"first": "Jacob", "last": "e","age":40},
        {"first": "Jayden", "last": "f"},
        {"missing": "different"}
      ]
},"people[?age>'10'][first,age]| [0] | [0]")

console.log(`array filter  ${JSON.stringify(result6)}`)


const result7 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6],
    people: [
        {"first": "James", "last": "d","age":90},
        {"first": "Jacob", "last": "e","age":40},
        {"first": "Jayden", "last": "f"},
        {"missing": "different"}
      ]
},"length(people)")

console.log(`array filter  ${JSON.stringify(result7)}`)



const result8 = jmespath.search({
    a:"dalong",
    userids:[1,4,5,6],
    people: [
        {"first": "James", "last": "d","age":90},
        {"first": "Jacob", "last": "e","age":40},
        {"first": "Jayden", "last": "f","age":33},
        {"missing": "different","age":55}
      ]
},"max_by(people,&age).first")

console.log(`array filter  ${JSON.stringify(result8)}`)