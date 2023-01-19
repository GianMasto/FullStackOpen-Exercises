const AddPerson = ({onFormSubmit, onInputChange, formValues}) => {
  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input onChange={onInputChange} value={formValues.name} name="name" />
          <br />
          number: <input onChange={onInputChange} value={formValues.number} name="number" type="tel" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson