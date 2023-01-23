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
  Camera,
  Pricing,
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
      <Camera />
      <Pricing />
    </div>
  );
}

export default App;
