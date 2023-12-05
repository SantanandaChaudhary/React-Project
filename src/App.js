import React,{useState,useEffect, useCallback} from 'react'
import Todos from './components/Todos';
// import Practice from './components/Practice'


const App = () => {
  // const a = '100';
  // console.log(a);
  // const b = Number.parseInt(a);
  // console.log(a + b);

  // const name = " I am a good boy"
  // const nP = name.replace('good', 'handsome');
  // console.log(nP)

  // const repeat = name.repeat(2);

  // console.log(repeat);

//   const netSalary = 25000;
//   const expenses = 40000;

// const save = netSalary>expenses ? `you have saved ${netSalary-expenses } this month`:netSalary<expenses ?`You have spend extra ${expenses - netSalary }this month`:'Your balanc hasn\'t change';

// const ab = 2;
//  switch (ab) {
//   case 0:
//     console.log('Iam dami');
//     break;
//  case 2:
// console.log( 'I am bhat khauka')
// break;
//   default:
//   console.log('Nothing Boss')
//  }

const [count, setCount] = useState(0);
const [todo, setTodo] = useState([]);

const addTodo= useCallback(()=>{
setTodo((prev)=>[...prev,`new Entry`])
},[])

useEffect(()=>{
  // document.title=`You have Clicked ${count } times`
})
 
// const check =()=>{
//   setCount(count+1)
// }


  return (
    <div>
    <Todos todos={todo} addTodo={addTodo}/>
      <button onClick={()=>{setCount(count+1)}}> Click {count} times </button>



    </div>

    
  )
}

export default App
