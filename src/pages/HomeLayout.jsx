import { Outlet } from 'react-router-dom'
import Navbar from '../components/NAvbar'

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default HomeLayout
