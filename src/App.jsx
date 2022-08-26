import HeaderBGMobile from "./images/bg-header-mobile.svg";
import HeaderBGDesktop from "./images/bg-header-desktop.svg";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-light-grayish-cyan-background h-screen w-screen">
      <img
        className="xl:hidden w-full bg-desaturated-dark-cyan"
        src={HeaderBGMobile}
        alt="Header Background"
      />
      <img
        className="hidden xl:inline w-full bg-desaturated-dark-cyan h-32 object-cover"
        src={HeaderBGDesktop}
        alt="Header Background"
      />

      <Hero />
    </div>
  );
}

export default App;
