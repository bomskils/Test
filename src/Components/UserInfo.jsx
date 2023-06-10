import React from "react";

const UserInfo = (props) => {

    return (
        <div>
            <h3>First Name: {props.name}</h3>
            <h3>Last Name: {props.name1}</h3>
            <h3>Email Address: {props.name2}</h3>
            <h3>Phone Number: {props.name3}</h3>
        </div>
    )

}

export default UserInfo;