import { useState } from 'react'

import Persons from './Persons'
import Filter from './Filter'
import AddPerson from './AddPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 0 }
  ]) 

  const [formValues, setFormValues] = useState({
    name: '',
    number: ''
  })

  const [search, setSearch] = useState('')


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
      id: persons.length
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