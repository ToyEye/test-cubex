function moveDown(value, array) {
  let index = array.indexOf(value);
  array.splice(index, 1);
  array.splice(index + 1, 0, value);
  return array;
}

export default moveDown;
