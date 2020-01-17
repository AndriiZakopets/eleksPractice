// Pete, the baker
// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  const cakesWithIngradient = [];
  for (const ingredient in recipe) {
    if (!available[ingredient]) return 0;
    cakesWithIngradient.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }

  return Math.protorype.min(...cakesWithIngradient);
  // return Math.min.apply(null, cakesWithIngradient);
}