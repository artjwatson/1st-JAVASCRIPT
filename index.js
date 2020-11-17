// Retirement Age
let age = prompt("At What Age Can You Retire?");

if (age < 40) {
  alert("You Will Move Back with Parents");
} else if (age >= 40 && age < 50) {
  alert("You Will Be a Burden on Your Children");
} else if (age >= 50 && age < 63) {
  alert("You Will Get by on Cat Food During Retirement");
} else if (age >= 63 && age < 67) {
  alert("You Are in That Sweet Spot. Enjoy the Next 10 Summers!");
} else if (age >= 67 && age < 75) {
  alert("The Good Years Are Behind You");
} else if (age >= 75 && age < 80) {
  alert("Your Children Will Put You in a Nursing Home");
} else if (age >= 80 && age < 85) {
  alert("You Will Not Know Your Own Name by Then");
} else if (age >= 85) {
  alert("You Will Not Live to See That Age");
}
