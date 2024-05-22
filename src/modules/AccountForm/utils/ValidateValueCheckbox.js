function ValidateValueCheckbox(value) {
  if (value) {
    value = true
    return value
  }
  value = false
  return value
}

export {ValidateValueCheckbox}