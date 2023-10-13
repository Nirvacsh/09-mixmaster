import { Outlet } from 'react-router-dom'
import Navbar from '../components/NAvbar'

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </div>
  )
}
export default HomeLayout
