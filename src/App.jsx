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
    </div>
  );
}

export default App;
