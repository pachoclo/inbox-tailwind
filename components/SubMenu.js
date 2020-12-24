import { SearchIcon } from './SearchIcon'

export const SubMenu = () => (
  <div className='w-64 flex flex-col bg-gray-100 justify-between'>
    <InboxHeader />
    <InboxItemList />
  </div>
)

const InboxHeader = () => (
  <div className='flex justify-between items-center mb-14 p-4'>
    <h1 className='font-semibold text-3xl'>Inbox</h1>
    <SearchIcon />
  </div>
)

const InboxItemList = () => (
  <div className='flex flex-col space-y-4 overflow-scroll px-4 mb-4'>
    <InboxItem />
    <InboxItem />
    <InboxItem />
    <InboxItem />
    <InboxItem />
  </div>
)

const InboxItem = () => <div className='h-40 bg-gray-300 flex-none'></div>
