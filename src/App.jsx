import React, {component} from "react";

import UserInfo from "./Components/UserInfo";



class App extends component{
  state = {
    userinfo:[

      {firstName: "Boma"},
      {LastName: "Dala"},
      {EmailAddress: "boma@gmail.com"},
      {PhoneNo: "08094567898"},
   

    ]
  }

  



  render(){
    return(
      <div className="design">
        <UserInfo name = {this.state.userinfo[0].firstName}/>
        <UserInfo name1 = {this.state.userinfo[1].LastName}/>
        <UserInfo name2 = {this.state.userinfo[2].EmailAddress}/>
        <UserInfo name3 = {this.state.userinfo[3].PhoneNo}/>
      </div>
    )
  }
}





export default App;
