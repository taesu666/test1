import React from 'react';

class SignUp extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      state_nickname: '',
      state_gender: ''
    }
  }

  handleChange = (Event) => {
    this.setState ({
      ['state_' + Event.target.name]: Event.target.value
    });
  }

  render(){
    var{val_nickname, val_gender} = this.state;

    return(
      <form onSubmit = {this.handleChange}>
        <label>
          Name: 
          <input
            type='text'
            name={'nickname'}
            value={val_nickname}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Gender
          <select
            name={'gender'}
            value={val_gender}
            onChange={this.handleChange}>
              
            <option value ={'Man'}>Man</option>
            <option value ={'Woman'} >Woman</option> 
             {/* 버튼을 눌러도 Woman으로 안바뀜  */}
            </select>
        </label>
        <br/>
        <input type = 'submit' value = 'Submit'/>
      </form>
    )
  }
}

export default SignUp;