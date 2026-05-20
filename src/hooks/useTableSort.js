import { useState } from 'react'

export function useTableSort(defaultCol) {
  const [sortCol, setSortCol] = useState(defaultCol)
  const [sortDir, setSortDir] = useState(1)

  function handleSort(col) {
   if (sortCol === col) {
      setSortDir(-sortDir)
    } else {
      setSortCol(col)
      setSortDir(1)
    }
  }

  return { sortCol, sortDir, handleSort }
}