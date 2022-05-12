import { useState } from 'react'
import FeedbackList from './FeedbackList'
import Header from './Header'
import FeedbackData from './data/FeedbackData'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
		setFeedback(feedback.filter((item)=> item.id !== id))
		}
	}
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}
export default App
