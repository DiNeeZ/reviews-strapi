import { Link } from 'react-router-dom'

const SiteHeader = () => {
	return (
		<header>
			<div className="site-header">
				<Link to="/"><h1>Ninja Reviews</h1></Link>
			</div>
		</header>
	)
}

export default SiteHeader