import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      users: [
        {id: 1, name: '다용', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer'},

        {id: 2, name: '성진', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Designer'},
        
        {id: 3, name: '태수', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer'},
        
        {id: 4, name: '태은', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Designer'},
        
        {id: 5, name: '재만', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: ' 커플 '},
        
        {id: 6, name: '지환', imgage:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: ' 친구 '},
        
      ]
    }
    }  

  render() {
    const {users} = this.state;

    return(
      <div>
        {users.map((user)=>{
          return (
            <UserProfile
              user={user} />
          )
        })}
      </div>
    )
  }
}

export default UserProfileList;