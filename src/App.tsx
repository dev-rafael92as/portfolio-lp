import Header from "./components/Header/Header";
import HistorySession from "./components/HistorySession/HistorySession";
import StartSession from "./components/StartSession/StartSession";

function App() {

  return (
    <>
      <Header />

      <main className="text-white">
        <StartSession />

        <HistorySession />
      </main>
    </>
  )
}

export default App
