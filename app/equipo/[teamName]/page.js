import { Equipo } from "@/components/equipos/Equipo";
import React from "react";

export default function EquipoPage({ params }) {
  const equipoName = params.teamName;

  return (
    <main>
      <div className="p-4 max-w-5xl mx-auto">
        <div>{equipoName}</div>

        <Equipo name={equipoName} />
      </div>
    </main>
  );
}
