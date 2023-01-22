import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { Quotes, Hero, PhoneModel } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      {/* <PhoneModel /> */}
      <Hero />
    </div>
  );
}

export default App;
