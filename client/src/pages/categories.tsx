import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error("Erreur fetch :", err));
  }, []);

  return (
    <div>
      <h1>Liste des catégories</h1>

      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Categories;
