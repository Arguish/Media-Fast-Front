import { useEffect, useState } from 'react'

const useList = (array) => {
  // const
  const [List, setList] = useState(
    array && array.length !== 0 ? array : [{ item: 'default' }]
  )
  const [Index, setIndex] = useState(0)

  //methods
  const previous = () => {
    if (Index <= 0) {
      setIndex(List.length - 1)
    } else {
      setIndex(Index - 1)
    }
  }
  const next = () => {
    if (Index >= List.length - 1) {
      setIndex(0)
    } else {
      setIndex(Index + 1)
    }
  }
  return [List[Index], List, setList, next, previous]
}

export default useList
