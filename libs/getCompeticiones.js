//Get all info from Categories
async function getAllCategories() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&req=categories&format=json",
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

//Get all info from top: competiciones y ligas
export async function getTopCompeticiones() {
  const categoryData = await getAllCategories();
  const topCompeticiones = categoryData.category.top["competiciones"];
  return topCompeticiones;
}
export async function getTopLigas() {
  const categoryData = await getAllCategories();
  const topLigas = categoryData.category.top["ligas"];

  return topLigas;
}

//Get all info from Spain
export async function getSpain() {
  const categoryData = await getAllCategories();
  const spain =
    categoryData.category["spain"].ligas &&
    categoryData.category["spain"].competiciones;
  return spain;
}

//Get all info from All other leagues
export async function getLeagues() {
  const categoryData = await getAllCategories();
  const leagues = categoryData.category["leagues"];
  const leaguesData = Object.keys(leagues);
  const allLeagues = [];
  leaguesData.forEach((data) => {
    const leaguesInData = leagues[data];
    leaguesInData.forEach((league) => {
      allLeagues.push(league);
    });
  });
  return allLeagues;
}

// Get All Competitions
export async function getCompeticionesInternacionales() {
  const categoryData = await getAllCategories();
  const competicionesInternacinales =
    categoryData.category.competitions["internacionales"];

  return competicionesInternacinales;
}
export async function getCompeticionesContinentales() {
  const categoryData = await getAllCategories();
  const competicionesContinentales =
    categoryData.category.competitions["continentales"];

  return competicionesContinentales;
}
export async function getCompeticionesContinentalClubs() {
  const categoryData = await getAllCategories();
  const competicionesContinentalClubs =
    categoryData.category.competitions["continental clubs"];

  return competicionesContinentalClubs;
}
export async function getCompeticionesInternacionalClubs() {
  const categoryData = await getAllCategories();
  const competicionesInternacionalClubs =
    categoryData.category.competitions["internacional clubs"];

  return competicionesInternacionalClubs;
}
export async function getCompeticionesClasificaciones() {
  const categoryData = await getAllCategories();
  const competicionesClasificaciones =
    categoryData.category.competitions["clasificaciones"];

  return competicionesClasificaciones;
}
