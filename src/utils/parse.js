export const parse = (data) => {
  let parsedData = null;

  try {
    parsedData = JSON.parse(data);
    return parsedData
  } catch (err) {
    return null
  }
};
