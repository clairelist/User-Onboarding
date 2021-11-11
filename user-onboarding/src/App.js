//DATA / IMPORT SECTION
import './App.css';

import React, {useState} from 'react';
import Form from './Form';

const initialFormValues = {
  username:'',
  password:'',
  email:'',
  tos:0 //NOT AN INT! this is a boolean!!!
}

function App() {

  const [formValues,setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {
    //TO BE BUILT OUT!
  }

  const handleChange = (name,value) => {
    setFormValues({...formValues,[name]:value});
  }

  return (
    <div className="App">
     <h1>THIS ISTHE START</h1>
     <p>I am a paragrpha</p>
     <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;
