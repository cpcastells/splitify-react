import { v4 as uuidv4 } from "uuid";
import { ContactData } from "../types";

export const initialContacts: ContactData[] = [
  {
    id: uuidv4(),
    name: "Johnny",
    image:
      "https://cdn.discordapp.com/attachments/1114204200885301331/1147183668176093304/johnny.webp",
    balance: 20,
  },
  {
    id: uuidv4(),
    name: "Jimmy",
    image:
      "https://cdn.discordapp.com/attachments/1114204200885301331/1147183667882508418/jimmy.webp",
    balance: -40,
  },
  {
    id: uuidv4(),
    name: "Jessica",
    image:
      "https://cdn.discordapp.com/attachments/1114204200885301331/1147183667580502148/jessica.webp",
    balance: 10,
  },
];
