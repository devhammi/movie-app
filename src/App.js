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
    //아래 코드는 동작하지 않는다. why?
    //reder function을 refresh 하지 않기 때문
    //this.state.count = 1;
    
    //setState를 호출하면 react는 state를 refresh하고 
    //render function을 호출한다.
    this.setState(current=>({count: current.count + 1}));
    console.log("add");
  };
  minus = ()=>{
    this.setState(current=>({count: current.count - 1}));
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
