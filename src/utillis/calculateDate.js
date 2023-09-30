function getCurrentDayName() {
  const currentDate = new Date();
  const options = { weekday: "long" }; // Specify 'long' for full day name

  return currentDate
    .toLocaleDateString("en-US", options)
    .slice(0, 3)
    .toLocaleLowerCase();
}

export { getCurrentDayName };
