export const Menu = () => (
  <div className='flex flex-col justify-between items-center w-16 p-4 bg-gray-200'>
    <div className='flex flex-col space-y-4'>
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
    </div>

    <div className='flex flex-col space-y-4'>
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
      <MenuItemPlaceholder />
    </div>
  </div>
)

export const MenuItemPlaceholder = () => (
  <a>
    <div className='rounded-full bg-gray-400 w-8 h-8'></div>
  </a>
)
