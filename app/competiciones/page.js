import { NavBar } from "@/components/NavBar";
import { TopCompeticionesLigas } from "@/components/competiciones/TopCompetitionesLigas";
import {
  //   getCompeticionesClasificaciones,
  //   getCompeticionesContinentalClubs,
  //   getCompeticionesContinentales,
  //   getCompeticionesInternacionalClubs,
  //   getLeagues,
  getTopCompeticiones,
  getTopLigas,
} from "@/libs/getCompeticiones";
import getDetalleCompeticionData from "@/libs/getDetalleCompeticion";

export default async function CompeticionesPage() {
  const topCompeticionesData = await getTopCompeticiones();
  const topLigasData = await getTopLigas();
  // const leagues = await getLeagues();
  // const competicionesContinentalClubs =
  //   await getCompeticionesContinentalClubs();

  const allTop = [
    ...topCompeticionesData,
    ...topLigasData,
    // ...leagues,
    // ...competicionesContinentalClubs,
  ];

  const stillOn = allTop.filter((e) => new Date() <= new Date(e.end_date));

  const filteredAllTop = stillOn.filter((e) => e.level <= 2);

  const leagueId = filteredAllTop.map((e) => e.id);

  const competicionData = await getDetalleCompeticionData(leagueId);
  const competicion = Object.values(competicionData);

  return (
    <main>
      <NavBar />
      {/* Top Competiciones yLigas */}
      <div className="flex p-4 max-w-5xl mx-auto">
        <TopCompeticionesLigas all={competicion} />
      </div>
    </main>
  );
}
