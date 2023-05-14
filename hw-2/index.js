const garden = {
    orange: "апельсин",
    apple: "яблоко",
    pear: "груша"
};

for (let key in garden) {
    const uppercaseKey = key.toUpperCase();
    if (uppercaseKey !== key) {
        garden[uppercaseKey] = garden[key];
        delete garden[key];
    }
}

for (let key in garden) {
    console.log(garden[key]);
}

if ("apple" in garden) {
    garden["pear"] = "delicious";
    console.log(garden["pear"]);
  }
  console.log(garden);