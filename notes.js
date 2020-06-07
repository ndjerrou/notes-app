const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => "Your notes...";

const removeNotes = (title) => {
  const notes = loadNotes();

  const remainingNotes = notes.filter((n) => n.title !== title);

  saveNotes(remainingNotes);

  if (remainingNotes.length === notes.length) {
    return false;
  } else {
    return true;
  }
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const existingNote = notes.find((n) => n.title === title);

  if (!existingNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    return;
  }
  console.log("Note's title taen!");
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach(({ title, body }) => {
    console.log(
      chalk.red.inverse(
        `Note's title = ${title}` + chalk.green.inverse(`Note's body = ${body}`)
      )
    );
  });
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
};
