const mediumIslands = [
  { x: 110, y: 130, label: "1" }, // Fireball + Vine
  { x: 190, y: 100, label: "2" }, // Chaotic Cloud
  { x: 260, y: 140, label: "3" }, // Earth platform
  // Add more based on your screenshot
];

mediumIslands.forEach((island) => {
  alt1.overLayText(
    island.label,
    island.x,
    island.y,
    true,
    alt1Color(0, 255, 255, 255), // Cyan for Medium level
    alt1Font(16, "Tahoma")
  );
});
