import React from 'react';
import useSwr,{SWRConfig}from "swr"
const feacher=(...args)=>fetch(...args).then(res=>res.json())
function App() {

  return (
      <SWRConfig value={feacher}>
        <Crismes/>
      </SWRConfig>
  );
}

export default App;
function Crismes(){
  const url="https://jsonplaceholder.typicode.com/posts/1/comments"
  const{data,error}=useSwr(url)
  if(!data){
    return  <div>data success</div>
  }
  if(error){
    return <div>error</div>
  }
  return <DataCrimes crimes={data}/>

}
function DataCrimes({crimes}){
  return(
      <>
        <pre>
          {
            JSON.stringify(crimes,null,2)
          }
        </pre>
        </>
  )
}