import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({course}) => {
  const total = course.parts.reduce((total, part) => (total + part.exercises), 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course