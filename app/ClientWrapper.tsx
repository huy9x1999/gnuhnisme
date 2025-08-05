'use client';

import { usePathname } from 'next/navigation';
import Header from './components/Header';
import SupperMenu from './components/SupperMenu';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldHide = pathname.startsWith('/myworks');

  return (
    <div>
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <SupperMenu />}
    </div>
  );
}
