/*
  filterName Function
  [1] If No Name Is Given It Will Show "Unknown"
  [2] If Name Starts Or Ends With Space It Will Be Trimmed
  [3] If Name Length > 10 It Will Show Only First 10 Characters
  [4] If Name Starts With Underscore It Will Not Show The Underscore
*/

function filteringName(name) {
    if (name === undefined) {
        name = "Unknown"
    }
    if (name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim();
    }
    if (name.length > 10) {
        name = name.substring(0, 10);
    }
    if (name.startsWith("_")) {
        name = name.substring(1);
    }
    if (name === "Hell") {
        throw Error("This Name Is Not Allowed");
    }
    return name;
}

module.exports = filteringName;