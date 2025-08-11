"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Header from "./components/Header";
import SupperMenu from "./components/SupperMenu";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Bỏ qua nếu đang ở trang 404
    if (document.title.includes("404")) return;

    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  }, [pathname, searchParams]);
  const shouldHide = pathname.startsWith("/myworks");

  return (
    <Suspense>
      <div>
        {!shouldHide && <Header />}
        {children}
        {!shouldHide && <SupperMenu />}
      </div>
    </Suspense>
  );
}
