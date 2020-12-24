import { Menu } from '../components/Menu'
import { SubMenu } from '../components/SubMenu'

export default function Home () {
  return (
    <div className='flex flex-row h-screen bg-gray-100'>
      <Menu />
      <SubMenu />
      <MainContent />
    </div>
  )
}

const MainContent = () => (
  <div className='flex-auto bg-white p-4 rounded-tl-2xl shadow-md'>
    main content
  </div>
)
