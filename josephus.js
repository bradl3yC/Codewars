function josephus(items,k){
  let arr = []
  let index = 0
  while(items.length > 0) {
    index = (index + k - 1) % items.length
    arr.push(items[index])
    items.splice(index, 1)
  }
  return arr
}