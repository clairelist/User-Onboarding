//DATA / IMPORT SECTION

import React from 'react';

//LOGIC / FUNCTION SECTION

const Form = (props) => {

    //'DATA' SECTION

    const {username,email,password,tos} = props.values; //since we will have change handler funcy on plain props value

    const {change, submit, errors} = props;

    //'LOGIC' AKA 'FUNCTION' SECTION

    const onChange = (event) => {
       const {name,value,checked,type} = event.target;
       const checkVal = type === 'checkbox' ? checked : value;
       change(name,checkVal);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //must prevent page from reloading as is 'default behaviour'
        submit();
    }

    //'RENDER' SECTION
    return (
        <div>
        <h1>WELCOME, USERS.</h1>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}>
            <lable>NAME:
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
            </lable>
            <lable>EMAIL:
                <input 
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
            </lable>
            <lable>PASSWORD:
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
            </lable>
            <lable>TERMS of SERVICE:
                <input 
                    type='checkbox'
                    name='tos'
                    checked={tos}
                    onChange={onChange}
                />
            </lable>
        <input type='submit' value='CREATE a USER' />
        </form>
        </div>
       
    )
}

export default Form;