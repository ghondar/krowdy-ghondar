import React from 'react'
import SortableTree from 'react-sortable-tree'
import Theme from './Theme'

function FiltersTree(props) {
  const {
    treeData: treeDataProps
  } = props

  const [ treeData, setTreeData ] = React.useState([])

  React.useEffect(() => {
    setTreeData(treeDataProps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateTreeData = data => {
    setTreeData(data)
  }

  return (
    <SortableTree
      isVirtualized={false}
      onChange={_handleUpdateTreeData}
      theme={Theme}
      treeData={treeData} />
  )
}

export default FiltersTree
