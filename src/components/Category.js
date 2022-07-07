import React,{useEffect,useState} from 'react'
import {useUserAuth} from '../Context/UserAuthContext'

const Category = () => {
    const {fetchData,category,fetcDataByCategoies,setNamecategory,nameCategory,dataCategory,isLoading} = useUserAuth()
    useEffect(() => {
fetchData('https://fakestoreapi.com/products/categories')
    },[])
    const handleClick=(e)=>{
      e.preventDefault()
        setNamecategory(e.target.innerHTML)
    fetcDataByCategoies()


}
console.log(isLoading)
useEffect(()=>{
console.log(nameCategory)
fetcDataByCategoies()
},[nameCategory])
  return (
    <div>
      <h1>Category</h1>
          <div className='container w-auto text-center mt-10'>
                <button className='px-2 py-2 ml-2 mr-4 bg-slate-500 rounded-full text-white'  onClick={(event)=>handleClick(event)}>{category[0]}</button>
                
                <button className='px-2 py-2 mx-4 bg-slate-500 rounded-full text-white'  onClick={(event)=>handleClick(event)}>{category[1]}</button>
                <button className='px-2 py-2 mx-4 bg-slate-500 rounded-full text-white'  onClick={(event)=>handleClick(event)}>{category[2]}</button>
                <button className='px-2 py-2 mx-4 bg-slate-500 rounded-full text-white'  onClick={(event)=>handleClick(event)}>{category[3]}</button>
                </div>
           
                <div className="max-w-md w-full lg:flex lg:flex-col  ">
  <div className="h-48 lg:h-auto lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center lg:flex  lg:justify-between lg:pr-10 ">
  {isLoading ? <h1>Loading...</h1> : dataCategory.map((e)=>{
    return(
     <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 lg:flex lg:flex-col lg:justify-between leading-normal lg:w-screen">
     <div className="w-48  h-full flex-col flex-wrap">
       <p className="text-sm text-grey-dark flex items-center flex-wrap">
       
         {e.title}
       </p>
       
     </div>
     <div className="flex items-center">
       <img className="w-32 h-32  mr-4" src={e.image}alt="Avatar of Jonathan Reinink"/>
       <div className="text-sm">
       
       </div>
     </div>
   </div>
   
    )
  })}
  </div>
  </div>


       

      


    </div>
  )
}

export default Category