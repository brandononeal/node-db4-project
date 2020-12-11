exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          step_text: "Toss dough",
          step_order: 1,
          recipe_id: 1,
        },
        {
          step_text: "Add sauce",
          step_order: 2,
          recipe_id: 1,
        },
        {
          step_text: "Add cheese",
          step_order: 3,
          recipe_id: 1,
        },
        {
          step_text: "Add olives",
          step_order: 4,
          recipe_id: 1,
        },
        {
          step_text: "Bake pizza",
          step_order: 5,
          recipe_id: 1,
        },
        {
          step_text: "Bring water to boil",
          step_order: 1,
          recipe_id: 2,
        },
        {
          step_text: "Pour water over noodles",
          step_order: 2,
          recipe_id: 2,
        },
        {
          step_text: "Toast bread",
          step_order: 1,
          recipe_id: 3,
        },
        {
          step_text: "Add avocado",
          step_order: 2,
          recipe_id: 3,
        },
      ]);
    });
};
