import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  //react는 자동적으로 class component의 render method를 실행한다.
  // 왜 class component를 이용해야할까? 
  //그 이유는 state 때문이다. 
  // state는 object이고 component의 data를 넣을 공간이 있고 데이터는 변한다.
  state = {
    count: 0
  }

  add = ()=>{
    console.log("add");
  };
  minus = ()=>{
    console.log("minus");
  };


 render(){
   return (
    <div>
      <h1>the number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
     </div>);
 }
}


export default App;
