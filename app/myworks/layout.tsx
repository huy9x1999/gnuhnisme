import type { Metadata } from "next";
import SupperMenu from "../components/SupperMenu";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "My Works",
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
        </div>
  );
}
