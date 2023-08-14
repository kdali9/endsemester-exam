import React from 'react'
import Itemcard from './Components/Itemcard';
import data from './Components/Data';

const Home = () => {
    



  return (
    <>
  <h1 className='text-center mt-3'>AVAILABLE ITEMS</h1>
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        {data.ProductData.map((item, index)=>{
            return(
                 <Itemcard img ={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                 
            )

        })}

        </div>
        </section>
    </>
  )
}

export default Home;
