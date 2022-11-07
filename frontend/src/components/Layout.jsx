import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'

const Layout = () => {
	return (
		<div className='app'>
			<SiteHeader />
			<Outlet />
		</div>
	)
}

export default Layout