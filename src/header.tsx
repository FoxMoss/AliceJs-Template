import "@mercuryworkshop/alicejs";
import "./header.css"

class Time {
  date = "now";
}
let time = stateful(new Time())
export function Header() {

  setInterval(function() {
    time.date = Date();
  }, 1)


  return (
    <div class="Header">
      <h2>{time.date}</h2>
    </div>
  )
}
