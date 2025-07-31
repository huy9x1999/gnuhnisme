import HomePage from "./page/home";
import SpiralPage from "./components/SpiralPage";
import Header from "./components/Header";
import SupperMenu from "./components/SupperMenu";
import CloseLest from "./components/CloseLest";
import Contact from "./components/Contact";
import BackgroundSpiral from "./components/BackgroundSpiral";


export default function Home() {
  return (
    <div className="relative scroll-container overflow-x-hidden bg-amber-200 w-screen h-screen"><HomePage/></div>
  );
}
