
import React, { useState } from 'react';


const App:React.FC = () => {
  const c = console.log.bind(document);
  
  const [res,setRes] = useState<string | number>('') 

  const numbers: number[] =[1,2,3,4,5,6,7,8,9,0]
  
  const [num,setNum] = useState('')

const addNum = (n:number)=> {
  setNum(num +''+ n)
}

const addOperator = (op:string)=> {
setNum(num + op)
}

const calc = ()=> {
  setRes(eval(num))
  setNum('')
}

  return (
    <div className='app'>
      <div className='calc-container rounded-xl'>
        <span className='result w-fit p-2 bg-slate-700 text-sky-50'>{res}</span>
        <button onClick={()=>{ setNum('');setRes('')}} className='clear text-center p-3 bg-red-500 text-sky-50'></button>
        <span><input value={num} type="text" /></span>
        <div className="numbers flex justify-center flex-wrap">
          {numbers.map(num=> (
            <button onClick={()=> addNum(num)} className='w-1/4 bg-white m-1' key={num}>{num} </button>
          ))}
        </div>
        <div className='operators text-lg justify-between  flex'>
          <button onClick={()=> addOperator('+')} className='bg-slate-300 p-4' >+</button>
          <button onClick={()=> addOperator('/')} className='bg-slate-300 p-4' >/</button>
          <button onClick={()=> addOperator('-')} className='bg-slate-300 p-4' >-</button>
          <button onClick={()=> addOperator('*')} className='bg-slate-300 p-4' >X</button>
          <button onClick={calc} className='bg-slate-300 p-4' >=</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;

  // variable name : string || number || array[] and so on ...
  // const appName: string = 'Calculator with typescript & react & tailwind css'

  // // array => type[] >> Example = string[] || number[]
  // const names : string[] = ['youssef','ibrahem','mohamed'];
  // const num : number[] = [1,3,4,5];

////////////////// Object ///////////////////
// type User = {
//   name: string,
//   age?: number, // ? => is optional mean = age 
//   isAvailble: boolean
// }

// const user1: User = {
//   name:'youssef',
//   isAvailble: true
// }

// const towType: string | number = 'youssef 5' + 5;

//////////////////Function////////////////////

// when a function not return any thing, It will be (void)
// const functionStringArgs : (name:string,age:number) =>void {
//   console.log(name);
// }

// functionStringArgs('Youssef',3)

///////////////// Any Type ///////////////////
// if you want a varible to have any type of data You use (any)
// const anytype: any = 'yousef'+ 5 + true;
// More recommended way is to use unknown