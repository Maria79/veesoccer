"use client";
import { useRouter } from "next/navigation";

export const Equipo = ({ name }) => {
  const router = useRouter();
  const id = router.query?.[e.id];
  console.log(id);

  return (
    <div>
      <div>Equipo</div>
    </div>
  );
};
