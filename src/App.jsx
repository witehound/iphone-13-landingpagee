import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import {
  Quotes,
  Hero,
  PhoneModel,
  Design,
  Display,
  Processor,
} from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      {/* <PhoneModel /> */}
      <Hero />
      <Design />
      <Display />
      <Processor />
    </div>
  );
}

export default App;
