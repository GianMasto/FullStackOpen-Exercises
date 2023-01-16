import StatisticLine from "./StatisticLine"

const Statistics = ({reviews}) => {
  return (
    <div>
      <h2>statistics</h2>
      {
        reviews.total <= 0 ?
          (
            <p>No feedback given</p>
          ) : 
          (
            <table>
              <tbody>
                <StatisticLine text="good" value={reviews.good} />
                <StatisticLine text="neutral" value={reviews.neutral} />
                <StatisticLine text="bad" value={reviews.bad} />
                <StatisticLine text="total" value={reviews.total} />
                <StatisticLine text="average" value={reviews.average} />
                <StatisticLine text="positive" value={reviews.positive + ' %'} />
              </tbody>
            </table>
          )
      }
    </div>
  )
}

export default Statistics