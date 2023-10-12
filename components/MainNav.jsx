import Link from "next/link";

export default function MainNav() {
  return (
    <div className="flex justify-around items-center pt-8 pb-4">
      <Link href="/">
        <h1 className="text-2xl font-semibold text-green-700">VeeSoccer!</h1>
      </Link>

      <div className=" flex gap-x-2">
        <Link
          href="/competiciones"
          className="cursor-pointer font-semibold hover:bg-slate-500/30 hover:rounded px-3"
        >
          Competiciones
        </Link>
        <Link
          href="/partidos"
          className="cursor-pointer font-semibold hover:bg-slate-500/30 hover:rounded px-3"
        >
          Partidos
        </Link>
        <Link
          href="/equipos"
          className="cursor-pointer font-semibold hover:bg-slate-500/30 hover:rounded px-3"
        >
          Equipos
        </Link>
      </div>
    </div>
  );
}
