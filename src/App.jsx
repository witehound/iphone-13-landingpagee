import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import {
  Quotes,
  Hero,
  PhoneModel,
  Design,
  Display,
  Processor,
  Battery,
  Colors,
} from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      <PhoneModel />
      <Hero />
      <Design />
      <Display />
      <Processor />
      <Battery />
      <Colors />
    </div>
  );
}

export default App;
