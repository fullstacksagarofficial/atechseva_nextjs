import React from 'react';
import { useRouter } from 'next/router';
import ContactLayout from './ContactLayout';

function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  // Determine which layout to use based on the pathname
  const getLayout = () => {
  if (pathname.startsWith('/contact')) {
      return ContactLayout;
    }
    return RootLayout; // Default layout
  };

  const LayoutComponent = getLayout();

  return <LayoutComponent>{children}</LayoutComponent>;
}

export default Layout;
