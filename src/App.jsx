import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { Quotes, Hero, PhoneModel, Design } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      {/* <PhoneModel /> */}
      <Hero />
      <Design />
    </div>
  );
}

export default App;
