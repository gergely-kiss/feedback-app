import { useState } from 'react'
import FeedbackList from './FeedbackList'
import Header from './Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
	return (
		<>
			<Header />
			<div className='container'>
        <FeedbackList feedback={feedback}/>
			</div>
		</>
	)
}
export default App
