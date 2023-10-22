
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) return [];
  matrix.map((elem, i) => {
      console.log(elem, i);
      if (i === 0 || i % 2 === 0) {
        result.push(...elem);
      } else {
        result.push(...elem.reverse());
      }
  })
  return result
}
