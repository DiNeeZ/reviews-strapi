import { useParams, Link } from 'react-router-dom'
import SpinnerPacman from '../components/SpinnerPacman'
import ErrorIndicator from '../components/ErrorIndicator'
import { useQuery } from '@apollo/client'
import { REVIEW } from '../query'

const ReviewDetails = () => {
	const { id } = useParams()
	const res = useQuery(REVIEW, {
		variables: { id: id }
	})

	const { data, error, loading } = res


	if (loading) return <SpinnerPacman loading={loading} />
	if (error || data.review.data === null) return <ErrorIndicator msg={error?  error.message : `There is no review with id = ${id}`} />

	const { raiting, title, body } = data.review.data.attributes
	return (
		<section className='review-card'>
			<div className='rating'>{raiting}</div>
			<h2>{title}</h2>

			<small>Console List</small>

			<p >{body}</p>

			<Link to='/' style={{ marginBottom: '50px', display: 'inline-block' }}>&#8592; Go Back</Link>
		</section>
	)
}

export default ReviewDetails