const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const { program } = require('commander');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts().then(console.table);
      break;

    case 'get':
      getContactById(Number(id)).then(console.log);
      break;

    case 'add':
      addContact(name, email, phone).then(console.log);
      break;

    case 'remove':
      removeContact(Number(id)).then(console.log);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
