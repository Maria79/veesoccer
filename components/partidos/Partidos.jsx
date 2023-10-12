import Image from "next/image";
import React from "react";

export const Partidos = ({ leagueName, partidos }) => {
  const t = partidos.filter((p) => p.competition_name === leagueName);
  return (
    <div>
      {t.map((e) => (
        <div key={e.id} className="border">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className=" w-4/5 flex justify-between items-center pt-1">
              <div>
                {e.status === 1 ? (
                  <div className="bg-gray-300 px-3 py-0.5 text-sm">FIN</div>
                ) : e.status === 0 ? (
                  <div className="bg-green-400 px-3 py-0.5 text-sm">
                    {e.live_minute}&apos;
                  </div>
                ) : null}
              </div>
              <div className="text-center">Jornada {e.round}</div>
              <div className="text-center"></div>
            </div>
            <div className="flex gap-x-4 py-2">
              <div className="w-[250px] text-right">{e.local}</div>
              <div className="w-[32px] text-center">
                <Image
                  src={e.local_shield}
                  alt={e.local}
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-[50px] text-center">
                {e.result !== "x-x" ? e.result : `${e.hour}:${e.minute}`}
              </div>
              <div className="w-[32px] text-center">
                <Image
                  src={e.visitor_shield}
                  alt={e.visitor}
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-[250px]">{e.visitor}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
