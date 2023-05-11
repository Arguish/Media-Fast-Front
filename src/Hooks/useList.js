import { useEffect, useState } from 'react'

const useList = (array) => {
  // const
  const [lst, setLst] = useState(array && array.length !== 0 ? array : [{}])
  const [lstIndex, setLstIndex] = useState(0)
  const [lstItem, setLstItem] = useState(lst[lstIndex])

  useEffect(() => {
    handleItemChange()
  }, [lstIndex])

  //methods
  const handleItemChange = () => {
    setLstItem(lst[lstItem])
  }

  const previous = () => {
    if (lstIndex <= 0) {
      setLstIndex(lst.length - 1)
    } else {
      setLstIndex(lstIndex - 1)
    }
  }
  const next = () => {
    if (lstIndex >= lst.length - 1) {
      setLstIndex(0)
    } else {
      setLstIndex(lstIndex + 1)
    }
  }
  return [lstItem, lst, setLst, next, previous]
}

export default useList
