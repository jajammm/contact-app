const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const chalk = require("chalk");

// Membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

const saveContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  // Check duplicate
  const duplicate = contacts.find((contact) => contact.nama === nama);
  if (duplicate) {
    console.log("Contact sudah terdaftar, gunakan nama lain 😁");
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terimakasih sudah memasukkan data!");
};

module.exports = { saveContact };
