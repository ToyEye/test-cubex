function moveUp(value, array, func) {
  let index = array.indexOf(value);
  array.splice(index, 1);
  array.splice(index - 1, 0, value);
  func([...array]);
}

export default moveUp;
