import "@mercuryworkshop/alicejs";
import { Header } from "./header.tsx"

function App() {
  this.counter = 0;
  return (
    <div>
      <Header />
    </div>
  );
}

window.addEventListener("load", () => {
  document.body.appendChild(<App />);
});
