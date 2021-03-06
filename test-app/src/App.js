import logo from './logo.svg';
import React from 'react';
import './App.css';
import Comment from './Comment';

const commentsFromServer = [
  {id: 1,name: 'Inje Lee', content: 'My comment'},
  {id: 2,name: 'su', content: 'ㅋㅋㄹㅋㅋ'},
  {id: 3,name: 'ho', content: 'ㅋㅋㄹㅃㅃ'},
];

var timer;

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length < commentsFromServer.length){
        let index = comments.length;
        comments.push(commentsFromServer[index]);
        if(comments.length >2){
          comments.pop();
        }
        this.setState({
          comments: comments
        });
        
      // }if(comments.length >3){
      //   comments.pop();
      //   this.setState({
      //     comments: comments
      //   });
      } 
    
      else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {

    const{comments} = this.state;

    return(
      <div className="App" style={{ padding:16, backgroundColor: '#282c34'}}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
           </a>
        </header>
        <div>     
          {comments.map((comment, index)=>{
            return (
              <Comment
              key={comment.id}
              id={comment.id}
              name = {comment.name}
              content={comment.content}
              />
            )
          })}

        </div>
 
    </div>
        
    );
  }
}

export default App;
