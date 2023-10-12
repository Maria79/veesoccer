import Link from "next/link";

export const NavBar = () => {
  const navBarItems = [
    {
      item: "POPULAR",
      url: "/competiciones",
      urlTeams: "/teams",
    },
    {
      item: "EUROPA",
      url: "/competicion/eu",
      urlTeams: "/teams/eu",
    },
    {
      item: "AMÉRICA",
      url: "/competicion/am",
      urlTeams: "/teams/am",
    },
    {
      item: "ASIA/OCEANÍA",
      url: "/competicion/ao",
      urlTeams: "/teams/ao",
    },
    {
      item: "ÁFRICA",
      url: "/competicion/af",
      urlTeams: "/teams/af",
    },
    {
      item: "INTERNACIONAL",
      url: "/competicion/internacional",
      urlTeams: "/teams/internacional",
    },
  ];
  return (
    <div className="py-4 bg-[#f9f9f9] border-t-2 border-b-2">
      <div className="flex justify-center gap-x-2">
        {navBarItems.map((e, index) => (
          <div key={index} className="cursor-pointer hover:font-semibold">
            <Link href={e.url}>{e.item}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
