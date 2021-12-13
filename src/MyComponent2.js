import React from "react";

export class MyComponent2 extends  React.Component { 
 
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }
   
    render() { 
      return <div>
          <h2>Details about {this.state.user.name}</h2>
          <p>Email: {this.state.user.email}</p>
      </div>
    } 
  } 


  export default MyComponent2;