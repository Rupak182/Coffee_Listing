import React from 'react'

const Item = (d) => {
    return (
        <div className="card text-white flex flex-col gap-2 relative">
            {d.popular && <div className='bg-[#F6C768] w-fit text-sm px-2 font-semibold absolute top-2 left-2 text-black rounded-lg'>Popular</div>}
            <img className='rounded-md ' src={d.image} alt="" />
            <div className='flex justify-between'>
                <span>{d.name}</span>
                <span className='p-1 rounded-md bg-[#BEE3CC] font-bold text-sm text-black'>{d.price}</span>
            </div>
            {d.votes > 0 ?
                <div className='flex justify-between'>
                    <span className=' flex'><img src="images/Star_fill.svg" alt="" /><span >{parseFloat(d.rating)}</span><span className='text-[#6F757C]'>{`(${d.votes} votes)`}</span></span>
                    {d.available === false && <div className='text-[#ED735D] '>Sold Out</div>}

                </div> :
                <div className='flex justify-between'>
                    <span className='text-[#6F757C] flex  '><img src="images/Star.svg" alt="" />No ratings</span>
                    {d.available === false && <div className='text-white'>Sold Out</div>}
                </div>
            }
        </div>


    )
}

export default Item
