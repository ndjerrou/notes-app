const _ = require("yargs");

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
    console.log(`Title : ${title} \n Body : ${body}
    `);
  },
});

_.command({
  command: "remove",
  describe: "Removing an existing note",
  handler: () => {
    console.log("Removing note...");
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
    console.log("Listing all notes");
  },
});

_.parse(); //to parse our commands from the output command line
