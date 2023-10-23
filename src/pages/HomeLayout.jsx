import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/NAvbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading'></div>
        ) : (
          <Outlet context={{ value: 'some value' }} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
