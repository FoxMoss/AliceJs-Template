import "@mercuryworkshop/alicejs";

class Time {
  date = new Date();
}
let time = stateful(new Time())
export function Body() {

  setInterval(function() {
    time.date = new Date();
  }, 100)


  return (
    <div>
      <h2>{time.date}</h2>
    </div>
  )
}
