<<<<<<< HEAD
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
=======

var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elenent){
  var arrayTemp = array
  arrayTemp.unshift(element)
  return arrayTemp
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element)
>>>>>>> 91501cf96bea2eaba73b576b011f874f76278c9e
  return array
}

function addElementToEndOfArray(array, element){
<<<<<<< HEAD
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}
=======
  var arrayTemp = array
  arrayTemp.push(element)
  return arrayTemp
}

function estructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
>>>>>>> 91501cf96bea2eaba73b576b011f874f76278c9e
