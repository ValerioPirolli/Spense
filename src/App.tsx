import { Hamburger } from "./components/Hamburger";
import heroMobile from "./assets/Hero Image (Mobile).png";
import { Subscription } from "./components/Subscription";
import { EscrowApp } from "./components/EscrowApp";
function App() {
  return (
    <>
      <div className="cream">
        <Hamburger />
        <img src={heroMobile} alt="hero image" className="w-11/12 mx-auto" />
        <Subscription />
      </div>
      <div>
        <EscrowApp />
      </div>
    </>
  );
}

export default App;
