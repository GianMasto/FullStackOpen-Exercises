const Filter = ({onChange, value}) => {
  return (
    <div>
      <h2>Search</h2>
      <input onChange={onChange} value={value} />
    </div>
  )
}

export default Filter