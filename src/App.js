import React from "react";

class App extends React.Component{
  //react는 자동적으로 class component의 render method를 실행한다.
  // 왜 class component를 이용해야할까? 
  //그 이유는 state 때문이다. 
  // state는 object이고 component의 data를 넣을 공간이 있고 데이터는 변한다.
  state = {
    count: 0
  }
  constructor(props){
    super(props);
    console.log("constructor test");
  }
  //컴포넌트 마운트 후 실행.
  componentDidMount(){
    console.log("component redered");
  }
  //컴포넌트 update 후 실행. setState 시 실행됨.
  componentDidUpdate(){
    console.log("I just updated");
  }
  //component 종료 시 실행.
  componentWillUnmount(){
    console.log("Goodbye, cruel");
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
   console.log("reder test");
   return (
    <div>
      <h1>the number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
     </div>);
 }
}

                        
export default App;
