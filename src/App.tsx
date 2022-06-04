import React, { useState, FC } from 'react';
import Item from './Components/Item';


export interface IItem {
  name: string;
  id: number;
}

const App:FC = () => {

  const [items,setItems] = useState<IItem[]>([])
  const [inputValue,setInputValue] = useState<string>('')

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    
    if(inputValue){
        let newItem = {
          name:inputValue,
          id: new Date().getTime(),
          editing:false
        }
        setItems([...items, newItem])
        setInputValue('')
    }
    }
  

    
     const removeItem = (propId:number):void =>{
    let fillter = items.filter((item) => item.id !== propId)
    setItems(fillter)
  }


  return (
    <main className="w-screen min-h-screen flex flex-col  justify-start p-8 gap-10 items-center bg-slate-800">
      <h1 className='text-3xl text-green-300'>Your Personal List</h1>
      <form onSubmit={handleSubmit} className='w-96 h-56 flex justify-center items-center border-white border-2' >
        <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value) }
        placeholder='Text...'
        className='w-4/5 h-10 outline-none rounded-md px-2' 
        type="text" />
      </form>
      <div style={{minHeight: '15rem', width:'50%'}} className=' flex flex-col gap-4 p-6 justify-center border-2 border-white rounded-sm'>
      {
        items.map((item: IItem) =>{
          return <Item removeItem={removeItem} key={item.id} item={item} />
        })
      }
      </div>
    </main>
  );
}

export default App;
