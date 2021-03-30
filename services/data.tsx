export const tel: string = "+375(25) 935-80-31";
export const mail: string = "chiburashka47@gmail.com";
export const instagram: string = "@dsn_by";

export const navList: { text: string; path: string }[] = [
  { text: "О КОМПАНИИ", path: "/about" },
  { text: " НАШИ ОБЪЕКТЫ", path: "/work" },
  { text: "ОТЗЫВЫ", path: "/reviews" },
  { text: "КОНТАКТЫ", path: "/contacts" },
];

export const contactsData: { img: string; title: string; desc: string[] }[] = [
  {
    img: "address",
    title: "Адрес",

    desc: [
      "Минск, Нововиленская, дом 13а, офис 2 ",
      "Юридический адрес: 223062, Минский р-н, пос. Привольный, ул. Мира, д. 12, к. 39",
    ],
  },
  {
    img: "tel",
    title: "ТЕЛЕФОН",
    desc: [tel],
  },
  {
    img: "instagram",
    title: "EMAIL и Instargam",
    desc: ["alexeydesna@gmail.com", "@dsn_by"],
  },
  {
    img: "requisites",
    title: "РЕКВИЗИТЫ",
    desc: [
      "Р/с BY33 ALFA 3013 2470 2300 1027 000 в ЗАО «АЛЬФА-БАНК»",
      "КОД БАНКА: ALFABY2X",
      "УНП 193240087",
    ],
  },
];
