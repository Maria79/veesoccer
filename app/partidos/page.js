import getPartidosDelDia, {
  getPartidosEnDirecto,
  getPartidosTelevisados,
} from "@/libs/getPartidosDelDia";
import WeekView from "@/components/partidos/WeekView";
import { Televisado } from "@/components/partidos/Televisado";
import { PartidosDelDia } from "@/components/partidos/PartidosDelDia";

export default async function PartidosPage() {
  const partidosData = await getPartidosDelDia();
  const partidos = partidosData["matches"];

  const televisedData = await getPartidosTelevisados();
  const televised = televisedData["tv_matches"];
  const partidosDirecto = await getPartidosEnDirecto();

  function countObjectsInPartidos(partidos) {
    // Create a variable to store the count.
    let count = 0;

    // Iterate over the array and increment the count for each object.
    for (const object of partidos) {
      count++;
    }

    // Return the count.
    return count;
  }
  const countPartidos = countObjectsInPartidos(partidos);

  function countObjectsInTelevised(televised) {
    // Create a variable to store the count.
    let count = 0;

    // Iterate over the array and increment the count for each object.
    for (const object of televised) {
      count++;
    }

    // Return the count.
    return count;
  }

  const counttv = countObjectsInTelevised(televised);

  return (
    <div>
      <div>
        <WeekView />
        <Televisado
          tv={counttv}
          todos={countPartidos}
          directo={partidosDirecto}
        />
        <PartidosDelDia partidos={partidos} />
      </div>
    </div>
  );
}
