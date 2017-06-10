Typical mistakes in javascript

## Concatenating strings

// Bad
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

fullName(undefined, undefined) // Returns "undefined undefined"
fullName(null, null) // Returns "null null"

// Good
function fullName(firstName, lastName) {
  return [firstName, lastName].join(' ').trim()
}
// Or
function fullName(firstName='', lastName='') {
  return firstName + ' ' + lastName
}
