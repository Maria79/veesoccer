export default async function getDetalleCompeticionData(leagueId) {
  try {
    const res = await fetch(
      `https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=data_competitions&competitions=${leagueId}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch competitions");
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
