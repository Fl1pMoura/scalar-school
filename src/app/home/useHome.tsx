import { IPeopleData } from "@/entities/people";
import fs from "fs";
import path from "path";
import peopleData from "../../../people-data.json";

export default function useHome() {
  const posters = fs.readdirSync(path.join(process.cwd(), "public/posters"));
  const typedPeopleData = peopleData as IPeopleData;

  const ourPeople = fs
    .readdirSync(path.join(process.cwd(), "public/our-people"))
    .map((person) => ({
      image: person,
      name: typedPeopleData[person]?.name || "Nome não definido",
      role: typedPeopleData[person]?.role || "Cargo não definido",
      order: typedPeopleData[person]?.order || 999,
    }))
    .sort((a, b) => a.order - b.order);
  return { posters, ourPeople };
}
