import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { Quotes, Hero, PhoneModel, Design, Display } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      {/* <PhoneModel /> */}
      <Hero />
      <Design />
      <Display />
    </div>
  );
}

export default App;
