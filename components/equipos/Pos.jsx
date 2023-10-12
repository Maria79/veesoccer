import React from "react";

export const Pos = ({ table, currentRound, id }) => {
  const pos = table
    .filter((e) => e.round === currentRound && e.teamId === id)
    .map((e) => e.pos);

  return <>{pos}º </>;
};
