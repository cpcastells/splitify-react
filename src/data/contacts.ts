import { v4 as uuidv4 } from "uuid";
import { ContactData } from "../types";

export const initialContacts: ContactData[] = [
  {
    id: uuidv4(),
    name: "Johnny",
    image:
      "https://cdn.discordapp.com/attachments/1114204200885301331/1141028891218170047/foto.png",
    balance: 20,
  },
  {
    id: uuidv4(),
    name: "Jimmy",
    image:
      "https://media.discordapp.net/attachments/1114204200885301331/1141028892254158918/acuaterra_profile_picture_young_guy_asiatic_realistic_ultradeta_a765f4c6-428e-4137-ba58-22b0ae4544f2.png?width=599&height=599",
    balance: -40,
  },
  {
    id: uuidv4(),
    name: "Jessica",
    image:
      "https://media.discordapp.net/attachments/1114204200885301331/1141028892879114322/acuaterra_profile_picture_young_girl_pretty_dark_long_hair_ultr_a8ca7191-f691-436f-acab-c9cc67ba9114.png?width=599&height=599",
    balance: 10,
  },
];
