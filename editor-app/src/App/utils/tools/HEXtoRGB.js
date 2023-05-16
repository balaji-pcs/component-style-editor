function hexToRgb(hexCode) {
  hexCode = hexCode.replace("#", "");
  if (hexCode.length !== 6) {
    throw new Error("Invalid hex color code");
  }
  const r = parseInt(hexCode.substring(0, 2), 16);
  const g = parseInt(hexCode.substring(2, 4), 16);
  const b = parseInt(hexCode.substring(4, 6), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export default hexToRgb;

