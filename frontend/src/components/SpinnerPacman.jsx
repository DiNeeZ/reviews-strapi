import PacmanLoader from 'react-spinners/PacmanLoader'

const override = {
	display: "block",
	margin: "75px auto",
	borderColor: "#8e2ad6",
}

const SpinnerPacman = ({loading}) => {
	return (
		<PacmanLoader
			color='#8e2ad6'
			loading={loading}
			cssOverride={override}
			size={50}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	)
}

export default SpinnerPacman