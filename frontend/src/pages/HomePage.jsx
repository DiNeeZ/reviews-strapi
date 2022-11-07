import { Link } from 'react-router-dom'
import SpinnerPacman from '../components/SpinnerPacman'
import ErrorIndicator from '../components/ErrorIndicator'
import { useQuery } from '@apollo/client'
import { REVIEWS } from '../query'

const HomePage = () => {
	const { data, loading, error } = useQuery(REVIEWS)

	if (loading) return <SpinnerPacman loading={loading} />
	if (error) return <ErrorIndicator msg={error.message} />

	const reviews = data.reviews.data

	return (
		<div>
			{reviews.map(review => (
				<article key={review.id} className='review-card'>
					<div className='rating'>{review.attributes.raiting}</div>
					<h2>{review.attributes.title}</h2>

					<small>Console List</small>

					<p className='review-body'>{review.attributes.body}</p>
					<Link to={`/details/${review.id}`}>Read More</Link>
				</article>
			))}
		</div>
	)
}

export default HomePage