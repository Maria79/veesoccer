import Image from "next/image";

export const CompetitionesLigas = ({ all }) => {
  return (
    <div className="w-3/4">
      <div className="border bg-[#f9f9f9] py-2 px-3">
        <h2>TOP LIGAS Y COMPETICIONES</h2>
      </div>
      <div className="grid grid-cols-2">
        {all.map((e) => (
          <div key={e.id} className="flex border p-2">
            <div className="w-[50px] px-2">
              <Image src={e.logo} alt="" width={32} height={32} />
            </div>
            <div className="leading-5">
              <div className="flex gap-x-2">
                <div>
                  <Image src={e.flag} alt="" width={28} height={28} />
                </div>
                <div>{e.name}</div>
              </div>
              <div>
                <span className="text-green-500">En juego</span> (jor.
                {e.phases[0]?.data[0]?.current_round
                  ? e.phases[0]?.data[0]?.current_round
                  : e.phases[0]?.data[1]?.current_round
                  ? e.phases[0]?.data[1]?.current_round
                  : e.phases[0]?.data[2]?.current_round}
                )
              </div>
              <div className="">
                {e.phases[0]?.data[0]?.total_teams
                  ? e.phases[0]?.data[0]?.total_teams
                  : e.phases[0]?.data[1]?.total_teams
                  ? e.phases[0]?.data[1]?.total_teams
                  : e.phases[0]?.data[2]?.total_teams}{" "}
                equipos
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
