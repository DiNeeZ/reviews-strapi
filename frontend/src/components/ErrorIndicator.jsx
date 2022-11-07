import seriously from '../assets/error-image.png'

const ErrorIndicator = ({ msg }) => {
	return (
		<section className='error-indiacator'>
			<img src={seriously} alt='seriously' />
			<h2>{msg}</h2>
		</section>
	)
}

export default ErrorIndicator