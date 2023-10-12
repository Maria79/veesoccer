import { NavBar } from "@/components/NavBar";
import {
  getCompeticionesContinentalClubs,
  getCompeticionesContinentales,
  getLeagues,
  getTopCompeticiones,
  getTopLigas,
} from "@/libs/getCompeticiones";
import getDetalleCompeticionData from "@/libs/getDetalleCompeticion";
import { CompetitionesLigas } from "@/components/competiciones/CompetitionesLigas";

export default async function ContinentPage({ params }) {
  const leagues = await getLeagues();
  const topLigas = await getTopLigas();
  const topCompeticiones = await getTopCompeticiones();
  const competicionesContinentalClubs =
    await getCompeticionesContinentalClubs();
  const competicionesContinentales = await getCompeticionesContinentales();

  const all = [
    ...topLigas,
    ...leagues,
    ...topCompeticiones,
    ...competicionesContinentalClubs,
    ...competicionesContinentales,
  ];

  const continent = params.continent;

  const byContinent = [];

  if (continent === "eu") {
    const contnt = all.filter((e) => e.continent === "eu");
    byContinent.push(contnt);
  } else if (continent === "am") {
    const contnt = all.filter((e) => e.continent === "am");
    byContinent.push(contnt);
  } else if (continent === "af") {
    const contnt = all.filter((e) => e.continent === "af");
    byContinent.push(contnt);
  } else if (continent === "ao") {
    const contnt = all.filter(
      (e) => e.continent === "as" || e.continent === "oc"
    );
    byContinent.push(contnt);
  }
  const stillOn = byContinent[0]?.filter(
    (e) => new Date() <= new Date(e.end_date)
  );

  const filtered = stillOn?.filter(
    (e) =>
      (e.level <= 1.25 && e.ctype == "1") || e.ctype == "3" || e.ctype == "12"
  );
  filtered.sort((a, b) => {
    if (a.level < b.level) {
      return -1;
    } else if (a.level > b.level) {
      return 1;
    } else {
      return 0;
    }
  });

  const leagueId = filtered?.map((e) => e.id);

  const competicionData = await getDetalleCompeticionData(leagueId);
  const competicion = Object.values(competicionData);

  return (
    <main>
      <NavBar />
      <div className="flex p-4 max-w-5xl mx-auto">
        <CompetitionesLigas all={competicion} />
      </div>
    </main>
  );
}
