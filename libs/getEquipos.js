export default async function getEquipos(teamId) {
  try {
    const res = await fetch(
      `https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=team_info&id=${teamId}`,

      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch leagues data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
