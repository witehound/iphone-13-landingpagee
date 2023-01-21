import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { Quotes, Hero, PhoneModel } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      <Hero />
      <PhoneModel />
    </div>
  );
}

export default App;
