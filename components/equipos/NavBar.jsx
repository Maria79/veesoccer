import Link from "next/link";

export const NavBar = () => {
  const navBarItems = [
    {
      item: "POPULAR",
      urlTeams: "/teams",
    },
    {
      item: "EUROPA",
      urlTeams: "/teams/eu",
    },
    {
      item: "AMÉRICA",
      urlTeams: "/teams/am",
    },
    {
      item: "ASIA/OCEANÍA",
      urlTeams: "/teams/ao",
    },
    {
      item: "ÁFRICA",
      url: "/competicion/af",
      urlTeams: "/teams/af",
    },
    {
      item: "INTERNACIONAL",
      urlTeams: "/teams/internacional",
    },
  ];
  return (
    <div className="py-4 bg-[#f9f9f9] border-t-2 border-b-2">
      <div className="flex justify-center gap-x-2">
        {navBarItems.map((e, index) => (
          <div key={index} className="cursor-pointer hover:font-semibold">
            <Link href={e.urlTeams}>{e.item}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
