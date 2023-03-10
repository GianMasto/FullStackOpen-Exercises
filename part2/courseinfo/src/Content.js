import Part from "./Part"

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map(({name, exercises, id}) => (
          <Part name={name} exercises={exercises} key={id} />
        ))
      }
    </>
  )
}

export default Content
