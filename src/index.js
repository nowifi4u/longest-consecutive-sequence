module.exports = function longestConsecutiveLength(array) {
  let S = new Set()
  let ans = 0

  for (let i=0; i<array.length; i++){
    S.add(array[i])
  }

  for (let i=0; i<array.length; i++){
    if (!S.has(array[i]-1)){
      let j = array[i]
      while (S.has(j)){
        j++
      }
      ans = Math.max(ans, j-array[i])
    }
  }
  return ans
}
