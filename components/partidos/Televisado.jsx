export const Televisado = ({ tv, todos, directo }) => {
  return (
    <div className="bg-[#f9f9f9] border flex justify-around items-center max-w-4xl mx-auto px-1 py-2 ">
      <div>
        todos{" "}
        <span className="bg-green-600 rounded-full text-neutral-200 text-xs p-1 text-center">
          {todos}
        </span>
      </div>
      <div>
        televisados{" "}
        <span className="bg-slate-400 rounded-full text-slate-800 text-xs p-1 text-center">
          {tv}
        </span>
      </div>
      <div>
        en directo{" "}
        <span className="bg-red-700 rounded-full text-neutral-200 text-xs p-1 text-center">
          {directo.total}
        </span>
      </div>
    </div>
  );
};
