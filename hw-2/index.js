const garden = {
    orange: "апельсин",
    apple: "яблоко",
    pear: "груша"
};

for (let key in garden) {
    let uppercaseKey = key.toUpperCase();
    garden[uppercaseKey] = garden[key];
    delete garden[key];
}

