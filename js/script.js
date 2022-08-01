const textarea = document.querySelector('#textareaInput')

const lowerCaseContentButton = document.querySelector('#lowerCaseContentButton')
const upperCaseContentButton = document.querySelector('#upperCaseContentButton')
const capitalizeContentButton = document.querySelector(
  '#capitalizeContentButton',
)
const sentenceCaseContentButton = document.querySelector(
  '#sentenceCaseContentButton',
)

function init() {
  lowerCaseContentButton.addEventListener('click', lowerCaseContent)
  upperCaseContentButton.addEventListener('click', upperCaseContent)
  capitalizeContentButton.addEventListener('click', capitalizeContent)
  sentenceCaseContentButton.addEventListener('click', sentenceCaseContent)
}

function capitalizeContent() {
  let getString = document.querySelector('#textareaInput').value
  let str = getString.toLowerCase().split(' ')

  for (var i in str) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }

  let newString = str.join(' ')
  textarea.value = newString
}

function sentenceCaseContent() {
  let getString = document.querySelector('#textareaInput').value
  let str = getString.toLowerCase().split('. ')

  for (var i in str) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }

  let newString = str.join('. ')
  textarea.value = newString
}

function upperCaseContent() {
  let getString = document.querySelector('#textareaInput').value
  let newString = getString.toUpperCase()
  textarea.value = newString
}

function lowerCaseContent() {
  let getString = document.querySelector('#textareaInput').value
  let newString = getString.toLowerCase()
  textarea.value = newString
}

init()
