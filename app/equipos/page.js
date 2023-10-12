import { NavBar } from "@/components/equipos/NavBar";
import { Equipos } from "@/components/equipos/Equipos";
import getClasificacionData1 from "@/libs/getClasificacion";
import getEquipos from "@/libs/getEquipos";

export default async function EquiposPage() {
  const data = await getClasificacionData1();
  const teamId = data.map((e) => e.id);

  async function fetchEquipos() {
    const promises = teamId.map((id) => getEquipos(id));
    const equipoData = await Promise.all(promises);
    // console.log(equipoData);
    return equipoData;
  }
  const equipos = await fetchEquipos();

  return (
    <main>
      <NavBar />
      <div className="flex p-4 max-w-5xl mx-auto">
        <Equipos equipos={equipos} />
      </div>
    </main>
  );
}
