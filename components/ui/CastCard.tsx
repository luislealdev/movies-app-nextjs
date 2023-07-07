import { castPerson } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";
interface Props {
  person: castPerson;
}

export const CastCard: FC<Props> = ({ person }) => {
  return (
    <div className="bg-slate-50 flex flex-col drop-shadow-md rounded-lg md:hover:scale-110">
      <div className="object-contain">
        <Image
          width={100}
          height={100}
          src={`http://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt={person.name}
          className="rounded-t-lg object-contain max-width auto-height"
        />
      </div>
      <div className="p-2">
        <p className="font-sans text-sm text-slate-400">
          {person.known_for_department} - {person.character}
        </p>
        <h6 className="font-sans text-xl font-bold"> {person.name}</h6>
      </div>
    </div>
  );
};
