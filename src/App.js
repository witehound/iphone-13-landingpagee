import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { Quotes, Hero } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Quotes />
      <Hero />
    </div>
  );
}

export default App;
