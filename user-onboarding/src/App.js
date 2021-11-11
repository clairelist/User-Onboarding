//DATA / IMPORT SECTION
import './App.css';

import React, {useState} from 'react';
import Form from './Form';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';

const initialFormValues = {
  username:'',
  password:'',
  email:'',
  tos:0 //NOT AN INT! this is a boolean!!!
}

const initialFormErrors = {
  username:'',
  password:'',
  email:'',
  tos:0 //NOT AN INT! this is a boolean!!!
}

function App() {

  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors,setFormErrors] = useState(initialFormErrors);
  const [users,setUsers] = useState([]);

  const handleSubmit = () => {
    //TO BE BUILT OUT!
    axios.post('https://regres.in/api/users', formValues)
    .then(res=>{
      setUsers([res.data, ...users]);
    }).catch(err=> console.error(err))
    .finally(()=> setFormValues(initialFormValues));
  }

  const validate = (name,value)=>{
    yup.reach(schema,name).validate(value)
      .then(()=> setFormErrors({...formErrors,[name]:''}))
      .catch(err => setFormErrors({...formErrors,[name]: err.errors[0] }))
  }

  const handleChange = (name,value) => {
    validate(name,value); //validate, above

    setFormValues({...formValues,[name]:value});
  }

  return (
    <div className="App">
     <h1>THIS ISTHE START</h1>
     <p>I am a paragrpha</p>
     <Form 
     values={formValues} 
     change={handleChange} 
     errors={formErrors} 
     submit={handleSubmit}/>
      {users.map(user=>{
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      })}
    </div>
  );
}

export default App;
