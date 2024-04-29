
import React,{useReducer} from 'react'

function Usereducer() {
   

    const reducer=(state,action)=>{
        switch (action.type) {
            case "increment":return {count:state.count+1};
            case 'decrement':return {count:state.count-1}
                
                
        
            default:
                return state;
        }

    }

    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div className='bg-white'>
        <h1>Counter:{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      
    </div>
  )
}

export default Usereducer
