import React from "react";

export class MyComponent extends  React.Component { 
 
    constructor(props) {
        super(props);
        this.state = { users: [] };
           }

    componentDidMount() { 

       fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
                     .then(json => this.setState({ users: json }));

    } 
   
    render() { 
      return <div>
          <ul style={{width: 200}}>
              {this.state.users.map(user => <li style={{padding: 20, background: '#f1f1f1', listStyle: 'none', marginBottom: 3}} onClick={() => alert('hello ' + user.name)}>{user.username}</li>)}
            </ul>
      </div>
    } 
  } 