import { Logo } from '@/components/logo';
import { Link, useLocation } from 'react-router-dom';

function Header({ title }: { title?: string }) {
  const location = useLocation();

  return (
    <header style={{ paddingTop: '0.7rem', paddingBottom: '0.2rem' }} className="relative">
      <div className="mx-auto w-full max-w-8xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center gap-2 no-underline">
              {location.pathname === '/about' && <Logo />}
              <span>{title}</span>
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
