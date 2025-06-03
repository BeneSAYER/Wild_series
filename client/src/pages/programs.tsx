import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      })
      .catch((err) => console.error("Erreur fetch :", err));
  }, []);

  return (
    <div>
      <h1>Liste des séries</h1>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img src={program.poster} alt={program.title} width={200} />
          <p>
            <strong>Pays :</strong> {program.country}
          </p>
          <p>
            <strong>Année :</strong> {program.year}
          </p>
          <p>{program.synopsis}</p>
        </div>
      ))}
    </div>
  );
}

export default Programs;
