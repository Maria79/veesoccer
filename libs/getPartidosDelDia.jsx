export default async function getPartidosDelDia() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday",
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

export async function getPartidosTelevisados() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=tv_channel_matches",
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch televised matches");
    }
    const data = res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPartidosEnDirecto() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=live_matches",
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch televised matches");
    }
    const data = res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
