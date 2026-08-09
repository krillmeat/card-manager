export const EXPORT_DESTINATION = {
  LIMITLESS: "limitless",
  TCGONE: "tcg-one",
}

/**
 * Takes a Decklist built on this site and puts it in your clipboard to be imported on another site
 * @param {object} decklist     Decklist to be exported
 * @param {string} destination  Place where the decklist will be imported at [EXPORT_DESTINATION.]
 * @returns string used to import at selected destination
 */
export const decklistExporter = (decklist,destination=EXPORT_LOCATION.LIMITLESS) => {
  let finalString = "";

  // Make sure decklist param is legitimate
  if(typeof decklist !== "object" || Array.isArray(decklist)){
    console.log("Decklist is not formatted correctly");
    return "";
  }

  for(let key of Object.keys(decklist)){
    let card = decklist[key];
  }

  return finalString;
}
