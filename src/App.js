import React from "react";

class App extends React.Component{
  state={
    isLoading : true,
    movies: []      // 미래에 사용하고자 하는 함수를 state에 선언하는건 필수가 아니다!
                    // setState({book: true}) 로 선언가능
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    }, 6000);
  }

  render(){
    //this.state.isLoading로 적지 않는 방법!!
    const {isLoading} = this.state;
    return (<div>{isLoading ? "Loading":"We are Ready"}</div>);
    //처음 reder를 하면 호출되는 life cycle method는 무엇일까?
    //정답 : componentDidMount
  }
}

                        
export default App;
