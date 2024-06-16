export const stringParser = (string) => {
  const newString = string.split(";").map((str) => str.split("="));
  const parsedString = {
    [newString[0][0].trim()]: newString[0][1],
    [newString[1][0].trim()]: newString[1][1],
  };
  return parsedString;
};
