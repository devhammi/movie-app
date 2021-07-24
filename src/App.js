import React from "react";

function Potato(props){
  console.log(props);
  return  <h3>I Love {props.name}</h3>;
}


function App() {
  return  <div>
             heelllo
             <Potato
              name = 'kimchi' 
              papap={true} 
              ham = {["aaa","bbb","cc",]} 
             />
             <Potato
              name = 'ramen' 
              />
          </div>;
}

export default App;
