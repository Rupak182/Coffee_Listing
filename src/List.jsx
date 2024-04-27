import React from 'react'
import Item from './Item'

const List = ({data}) => {
  return (
<div className="boxes  p-4 flex gap-5 flex-wrap items-center justify-center ">

{
  data.map((d) => {

    return (
      <Item key={d.id} {...d}/>
    )
  })
}
</div>
  )
}

export default List
