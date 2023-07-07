import { castPerson } from "@/interfaces";
import { FC } from "react";
import { CastCard } from "./";
interface Props {
  cast: castPerson[];
}

export const CastList: FC<Props> = ({ cast }) => {
  return (
    <section className="grid sm:grid-cols-4 gap-8 p-8 lg:grid-cols-5">
      {cast.map((person) => (
        <CastCard person={person} key={person.name} />
      ))}
    </section>
  );
};
