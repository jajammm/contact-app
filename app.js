// Mengambil argument dari command line
const contacts = require("./contacts");
const { argv } = require("process");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.saveContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();

// const { tulisPertanyaan, saveContact } = require("./contacts");

// const mainAsk = async () => {
//   const nama = await tulisPertanyaan("Masukkan nama anda : ");
//   const email = await tulisPertanyaan("Masukkan email anda : ");
//   const noHp = await tulisPertanyaan("Masukkan No HP anda : ");

//   saveContact(nama, email, noHp);
// };

// mainAsk();
