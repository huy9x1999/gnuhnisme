"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Header from "./components/Header";
import SupperMenu from "./components/SupperMenu";
import { Suspense, useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
