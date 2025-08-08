'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Header from './components/Header';
import SupperMenu from './components/SupperMenu';
import { useEffect } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldHide = pathname.startsWith('/myworks');

  const searchParams = useSearchParams();

  useEffect(() => {
    // Đợi DOM render xong mới scroll
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.slice(1); // bỏ dấu #
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Nếu không có hash => scroll top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50); // delay nhỏ để DOM đảm bảo đã mount
  }, [pathname, searchParams]);

  return (
    <div>
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <SupperMenu />}
    </div>
  );
}
