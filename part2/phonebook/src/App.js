import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './Persons'
import Filter from './Filter'
import AddPerson from './AddPerson'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 

  const [formValues, setFormValues] = useState({
    name: '',
    number: ''
  })

  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:3001/persons')
      setPersons(data)
    }
    
    fetchData()
      .catch(console.error)
  }, [])


  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }


  const addPerson = (e) => {
    e.preventDefault()

    if (formValues.name === '') return
    if (persons.some(({name}) => name === formValues.name)) {
      return alert(`${formValues.name} is already added to phonebook`)
    }
    
    setPersons(persons.concat({
      name: formValues.name,
      number: formValues.number,
      id: persons.length + 1
    }))
   
    setFormValues({
      name: '',
      number: ''
    })
  }

  const handleFormChange = e => {
    const newFormObj = {...formValues}
    newFormObj[e.target.name] = e.target.value
    setFormValues(newFormObj)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <AddPerson onFormSubmit={addPerson} onInputChange={handleFormChange} formValues={formValues} />
      <Filter onChange={onSearchChange} value={search} />
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App