import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='w-screen lg:px-32 px-4'>
      <Navbar />
      <div className='w-full max-w-xs'>{children}</div>
    </div>
  );
}
