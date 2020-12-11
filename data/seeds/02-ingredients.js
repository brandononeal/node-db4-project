exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { ingredient_name: "Dough" },
        { ingredient_name: "Sauce" },
        { ingredient_name: "Cheese" },
        { ingredient_name: "Olives" },
        { ingredient_name: "Water" },
        { ingredient_name: "Noodles" },
        { ingredient_name: "Bread" },
        { ingredient_name: "Avocado" },
      ]);
    });
};
