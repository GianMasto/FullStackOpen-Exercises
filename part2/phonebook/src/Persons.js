import Person from "./Person"

const Persons = ({persons, search}) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(({name}) => name.toLowerCase().includes(search))
          .map(({name, number, id}) => (
            <Person key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  )
}

export default Persons