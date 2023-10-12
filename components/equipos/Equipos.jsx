import Image from "next/image";
import React from "react";
import { Pos } from "./Pos";
import Link from "next/link";

export const Equipos = ({ equipos }) => {
  const equiposValues = Object.values(equipos);
  const equipoAll = equiposValues.map((e) => e.team);

  const equipoT = equipoAll.sort((equip1, equip2) => {
    // Sort the equipment array by category rating, in descending order.
    if (equip1.category.rating === 0) {
      return -1; // Make equip1 come first.
    } else if (equip2.category.rating === 0) {
      return 1; // Make equip2 come first.
    } else {
      return equip2.category.rating - equip1.category.rating;
    }
  });

  // Currency
  function formatCurrency(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + "M";
    } else {
      return number;
    }
  }

  return (
    <div className="w-1/3">
      <div>
        <h2>TOP EQUIPOS</h2>
      </div>
      <div className="">
        {equipoT.map((e) => (
          <div key={e.id}>
            <Link
              href={`/equipo/${e.name_show.toLowerCase().replace(/ /g, "_")}`}
              title={`Equipo ${e.name_show}`}
              className="flex border py-2"
            >
              {/* LEFT */}
              <div className="w-[65px] px-2">
                <Image
                  src={e.shield}
                  alt={e.basename}
                  width={48}
                  height={48}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* RIGHT */}
              <div>
                <div>
                  <div className="flex gap-x-1 items-center">
                    <div>
                      <Image
                        src={e.category.flag}
                        alt={e.name_show}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="text-md font-semibold">{e.name_show}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    <Pos
                      table={e.table}
                      currentRound={e.category.current_round}
                      id={e.id}
                    />
                    en {e.category.cat_name}
                  </div>
                </div>
                <div>
                  <div className="text-sm">
                    {formatCurrency(e.team_stats.current_value)} valor de la
                    plantilla | elo {e.category.rating - 1}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
