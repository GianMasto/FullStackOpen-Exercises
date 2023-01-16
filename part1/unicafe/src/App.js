import Statistics from './Statistics'
import Button from './Button'

import { useState } from 'react'

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    positive: 0
  })

  const onClickHandle = (review) => {
    const newReviews = {...reviews}
    newReviews[review] = reviews[review] + 1
    newReviews['total'] = reviews['total'] + 1
    if (newReviews['total'] > 0) {
      newReviews['average'] = (newReviews['good'] - newReviews['bad']) / newReviews['total']
      newReviews['positive'] = newReviews['good'] * 100 / newReviews['total']
    }
    setReviews(newReviews)  
  }

  return (
    <>
      <h2>give feedback</h2>
      <Button onClick={() => {onClickHandle('good')}}>good</Button>
      <Button onClick={() => {onClickHandle('neutral')}}>neutral</Button>
      <Button onClick={() => {onClickHandle('bad')}}>bad</Button>
      <Statistics reviews={reviews} />
    </>
  )
}

export default App