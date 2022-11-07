import { Link } from 'react-router-dom'
import jordan from '../assets/404-image.png'

const NotFound = () => {
	return (
		<section className='not-found'>
			<div className='not-found-content-wrapper'>
				<div className='not-found-content'>
					<img src={jordan} alt='crying Michael Jordan' />
					<div className='not-found-descr'>
						<div>Awww...Don't Cry.</div>
						<h1>It's just a 404 Error!</h1>
						<p>
							What you're looking for may have been missplaced in Long Term Memory.
						</p>
					</div>
				</div>
				<Link className='go-home' to='/'>Go to Home Page</Link>
			</div>
		</section>
	)
}

export default NotFound