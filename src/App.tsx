import ContactSession from "./components/ContactSession";
import Header from "./components/Header/Header";
import HistorySession from "./components/HistorySession";
import ProjectSession from "./components/ProjectSession";
import SkillSession from "./components/SkillSession";
import StartSession from "./components/StartSession";
import StudySession from "./components/StudySession";

function App() {

  return (
    <>
      <Header />

      <main className="text-white">
        <StartSession />

        <HistorySession />

        <SkillSession />

        <ProjectSession />

        <StudySession />

        <ContactSession />
      </main>
    </>
  )
}

export default App
