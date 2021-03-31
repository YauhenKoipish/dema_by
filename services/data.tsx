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

export const reviewsData: {
  title: string;
  text: string;
  img: string;
  id: number;
}[] = [
  {
    title: "Aleksandr",
    text:
      "Выполнено все в срок, ребята веселые и трудолюбивые, работали без выходных! Качество отменное!",
    img: "aleksandrReview",
    id: 0,
  },
  {
    title: "Marina",
    text:
      "Все сделали отлично, правда попросили на 4 дня остановить работы, но когда завершили сделали скидку. Всем советую!",
    img: "marinaReview",
    id: 1,
  },
  {
    title: "Tamara",
    text:
      "Сделали проект в срок, с учетом наших пожеланий, состава семьи и технических возможностей. Очень понравился итог работы!  ",
    img: "tamaraReview",
    id: 2,
  },
  {
    title: "Vadim",
    text:
      "Можно доверить им работу. До этого сомневался так как было очень мало отзывов о их качестве работ. Но не подвели молодцы. По количеству и качеству все без обмана.",
    img: "vadimReview",
    id: 3,
  },
  {
    title: "Vitaliy",
    text:
      "Выполнено все в срок. Работают хорошо, ответственно. Все вопросы были решены в процессе работы. Советую для работы.",
    img: "vitaliyReview",
    id: 4,
  },
];
