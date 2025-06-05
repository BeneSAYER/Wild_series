// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);

  const category = categories.find((c) => c.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
/* Here you code */

// Export them to import them somewhere else

export default { browse, read };
/* Here you export */
