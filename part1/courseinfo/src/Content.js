import Part from "./Part"

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map(({name, exercises}) => (
          <Part name={name} exercises={exercises} key={name} />
        ))
      }
    </>
  )
}

export default Content
