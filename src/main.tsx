import "@mercuryworkshop/alicejs";
import { Body } from "./body.tsx"

function App() {
  return (
    <div>
      <Body />
    </div>
  );
}

window.addEventListener("load", () => {
  document.body.appendChild(<App />);
});
