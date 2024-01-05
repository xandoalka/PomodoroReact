import Tags from "./components/Tags/Tags"
import Timer from "./components/Timer/Timer"

function App() {

  return (
    <main className="text-white text-[1.6rem] min-h-screen py-8 text-center">
      <h1 className="text-[6rem]">Pomodoro</h1>
      <Tags></Tags>
      <Timer></Timer>
    </main>
  )
}

export default App
