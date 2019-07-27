const fetchWord = async (NumberWords) => {
  let response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${NumberWords}`);
  if (response.status === 200) {
    response = await response.json();
    return response.puzzle;
  } else {
    throw new Error(`Error: Unable to fetch word.`);
  }
};