import type { Metadata } from "next";
import SupperMenu from "../components/SupperMenu";
import Header from "../components/Header";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "gnuhnisme's works",
};

export default function MyWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div>
          <Header check />
          {children}
          <SupperMenu />
          <Contact/>
        </div>
  );
}
