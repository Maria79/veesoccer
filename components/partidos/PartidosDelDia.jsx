import React from "react";
import { Partidos } from "./Partidos";

export const PartidosDelDia = ({ partidos }) => {
  const leagues = partidos.map((e) => e.competition_name);

  const groupedLeagues = {};

  for (const league of leagues) {
    if (!groupedLeagues[league]) {
      groupedLeagues[league] = [];
    }

    groupedLeagues[league].push(league);
  }
  const ligas = Object.keys(groupedLeagues);
  const leagueObjects = ligas.map((league) => ({ name: league }));

  return (
    <div className="max-w-4xl mx-auto px-1 py-2 mt-3">
      <div>
        {leagueObjects.map((e, index) => (
          <div key={index} className="py-4">
            <div className="bg-[#f9f9f9] font-semibold text-xl border pl-3 py-1">
              {e.name}
            </div>
            <Partidos leagueName={e.name} partidos={partidos} />
          </div>
        ))}
      </div>
    </div>
  );
};
