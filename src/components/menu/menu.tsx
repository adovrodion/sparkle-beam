import { useLocation } from 'react-router-dom';
import MenuItem from '@/components/menu/menu-item'

const MENU_ITEMS = [
  { name: 'About Sparkle Beam NFT', to: '/about' },
]

function Menu({ className }: { className?: string }) {
  const location = useLocation()

  return (
    <ul className={className}>
      {location.pathname === '/about' && (
        <MenuItem key="Home" to="/" name="Home" />
      )}
      {MENU_ITEMS.map((link) => (
        <MenuItem key={link.name} to={link.to} name={link.name} />
      ))}
    </ul>
  )
}

export default Menu
