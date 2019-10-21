import React from 'react';
//function Sample() {
//  return <h1>hello Boopathi p</h1>
const Sample=props=>{
  console.log(props);
  return(<div><h1>hello {props.name}</h1>
  {props.children}</div>
)
}
//}
export default Sample
