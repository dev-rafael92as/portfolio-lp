import Header from "./components/Header/Header";
import StartSession from "./components/StartSession/StartSession";

function App() {

  return (
    <>
      <Header />

      <main className="text-white lg:px-4">
        <StartSession />
      </main>
    </>
  )
}

export default App
