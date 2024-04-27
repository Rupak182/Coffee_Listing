import React from 'react'
import Item from './Item'

const List2 = ({data}) => {
    return (
        <div className="boxes p-5 flex gap-5 flex-wrap items-center justify-center">

            {
                data.map((d) => {

                    return (
                         d.available&&<Item key={d.id} {...d} />
                    )
                })
            }
        </div>
    )
}

export default List2
