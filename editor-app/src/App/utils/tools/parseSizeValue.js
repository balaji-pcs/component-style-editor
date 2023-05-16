export default function parseSizeValue(inputValue) {
  const r = /^\d+$/;
  return (r.test(inputValue))?`${inputValue}px`:inputValue
}