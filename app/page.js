"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}]);
    setdesc("");
    settitle("");
    console.log(mainTask);
  }
  const deleteHandler =(i)=>{
       let copyTask=[...mainTask];
       copyTask.splice(i,1);
       setMainTask(copyTask);
  }
  let renderTask=<h2>No Task yet.</h2>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return(
         <li key={i} className='flex items-center justify-between'>
          <div className='flex item-center justify-between mb-2  w-2/3'>
          <h2 className="font-bold m-2  text-2xl">{t.title}</h2>
          <h2 className="font-bold m-2 text-xl ">{t.desc}</h2>
        </div>
        <button onClick={()=>{deleteHandler(i)}} className='bg-red-700 text-white font-bold rounded px-3 py-2 '>delete</button>
         </li>
      );
    })
  }
  return (
    <>
    <h1 className='bg-black text-white font-extrabold p-5 text-5xl text-center'>Rohan's To-Do-List</h1>
    <form onSubmit={submitHandler}>
      <input  type="text" className='text-2xl border-r-zinc-800 border-4 m-6 px-4 py-2 border-black' placeholder='Enter your title here'
      value={title}
      onChange={(e)=>{
          settitle(e.target.value);
      }}
      />
      <input  type="text" className='text-2xl border-r-zinc-800 border-4 m-6 px-4 py-2 border-black' placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value);
      }}

      />
      <button className='bg-black text-white px-4 py-2 font-extrabold rounded m-5'>Add Task</button>

    </form>
    <hr/>
    <div className="p-8 bg-slate-300" >
      <ul>
      {renderTask}
      </ul>
      
    </div>
    </>
  )
}

export default page