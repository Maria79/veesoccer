async function getClasificacionData(leaguesId) {
  try {
    const res = await fetch(
      `http://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=tables&league=${leaguesId}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch leagues data");
    }
    const data = res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getClasificacion(leaguesId) {
  const clasificacionData = await getClasificacionData(leaguesId);
  return clasificacionData.table;
}

export default async function getClasificacionData1() {
  const a = await getClasificacion(1);
  const primera = a.slice(0, 8);
  const b = await getClasificacion(10);
  const premier = b.slice(0, 8);
  const c = await getClasificacion(8);
  const bundesligue = c.slice(0, 8);
  const d = await getClasificacion(7);
  const serieA = d.slice(0, 8);

  const clasificacionData = [...primera, ...premier, ...bundesligue, ...serieA];

  return clasificacionData;
}
