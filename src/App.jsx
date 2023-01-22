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
      <Battery />
    </div>
  );
}

export default App;
