import HomePage from "./page/HomePage";
import SplashScreen from "./components/SplashScreen";
import SpiralPage from "./components/SpiralPage";
import Header from "./components/Header";
import SupperMenu from "./components/SupperMenu";
import CloseLest from "./components/CloseLest";
import Contact from "./components/Contact";
import BackgroundSpiral from "./components/BackgroundSpiral";


export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-amber-200 w-screen h-screen">
      <Header />
      <BackgroundSpiral />
      {/* <HomePage /> */}
      <SpiralPage />
      
      
       
      {/* <CloseLest /> */}
      {/*<Contact />*/}
      <SupperMenu /> 
    </div>
  );
}
