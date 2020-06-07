const _ = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

_.version("1.1.0");

_.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note's title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note's body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    notes.addNotes(title, body);
  },
});

_.command({
  command: "remove",
  describe: "Removing an existing note",
  builder: {
    title: {
      describe: "Note's title",
      type: "string",
      demandOption: true,
    },
  },
  handler: ({ title }) => {
    const result = notes.removeNotes(title);

    if (!result) {
      console.log(chalk.red.inverse("No note found"));
      return;
    }
    console.log(chalk.green.inverse("Note removed!"));
  },
});

_.command({
  command: "read",
  describe: "Reading an existing note",
  handler: () => {
    console.log("Reading a note");
  },
});
_.command({
  command: "list",
  describe: "Displaying all current notes",
  handler: () => {
    notes.listNotes();
  },
});

_.parse(); //to parse our commands from the output command line
