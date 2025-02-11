import { useEffect, useState } from "react";
import ContactSession from "./components/ContactSession";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HistorySession from "./components/HistorySession";
import ProjectSession from "./components/ProjectSession";
import SkillSession from "./components/SkillSession";
import StartSession from "./components/StartSession";
import StudySession from "./components/StudySession";
import { HygraphProvider } from "./context/useHygraph";
import { HygraphProps } from "./utils/componentTypes";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { portfolioQuerie } from "./utils/hygrapQuerie";

const App = () => {
	const [data, setData] = useState<HygraphProps | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProjectDetails = async () => {
			try {
				const response = await fetchHygraphQuery<HygraphProps>(portfolioQuerie);
				setData(response);
			} catch (error) {
				console.error("Erro ao buscar dados do Hygraph:", error);
			} finally {
				setLoading(false);
			}
		};

		getProjectDetails();
	}, []);

	if (loading) {
		return <div>Carregando...</div>;
	}

	if (!data) {
		return <div>Erro ao carregar os dados.</div>;
	}

	return (
		<HygraphProvider home={data}>
			<Header />

			<main className="text-white">
				<StartSession />
				<HistorySession />
				<SkillSession />
				<ProjectSession />
				<StudySession />
				<ContactSession />
			</main>

			<Footer />
		</HygraphProvider>
	);
};

export default App;
