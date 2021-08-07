import React from "react";
import axios from "axios";

class App extends React.Component{
  state={
    isLoading : true,
    movies: []      // 미래에 사용하고자 하는 함수를 state에 선언하는건 필수가 아니다!
                    // setState({book: true}) 로 선언가능
  };

  getMovies = () =>{
    const movies = axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }

  
  componentDidMount(){
    this.getMovies();
  }
  //javascript 에서 data를 fetch 하는 법 
  //fetch()
  //하지만 이 것보다 더 좋은 방법이 있다!
  //axios
  //하지만 이를 사용하기 위해 설치가 필요하다. 
  //npm install axios

  render(){
    //this.state.isLoading로 적지 않는 방법!!
    const {isLoading} = this.state;
    return (<div>{isLoading ? "Loading":"We are Ready"}</div>);
    //처음 reder를 하면 호출되는 life cycle method는 무엇일까?
    //정답 : componentDidMount
  }
}

                        
export default App;
