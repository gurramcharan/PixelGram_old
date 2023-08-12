import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import pic2 from "../../imgs/pic2.jpg";
import pic1 from "../../imgs/pic1.jpg";
import pic4 from "../../imgs/pic4.jpg";
import pic5 from "../../imgs/pic5.jpg";
import pic6 from "../../imgs/pic6.jpg";
import pic7 from "../../imgs/pic7.jpg"
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Siva Charan",
    lastName: "G",
    username: "gurramcharan",
    password: "123",
    bookmarks:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers:[],
    following:[],
    avatar:pic4,
    profile:"https://sivacharan.netlify.app/",
    bio:"Hey my self Siva Charan  foodie, coding enthusiast, and explorer. Embracing the joy of cooking,coding discovering new cultures, and connecting with people."
  },
  {
    _id: uuid(),
    firstName: "Sanjana",
    lastName: "Prakash",
    username: "sanju@12",
    password: "12",
    bookmarks:[],
    avatar:pic5,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile:"https://www.linkedin.com/in/logapriyasampathkumar/",
    bio:"Unleashing self-love, embracing tranquility. Finding bliss within, radiating serenity."

  },
  {
    _id: uuid(),
    firstName: "Larza",
    lastName: "Emmi",
    username: "emmi@09",
    password: "09",
    bookmarks:[],
    avatar:pic1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile:"https://www.linkedin.com/in/logapriyasampathkumar/",
    bio:"Dwelling in realms of extraordinary thoughts. A visionary mind breaking boundaries and sparking innovation."
  },
  {
    _id: uuid(),
    firstName: "Daniel",
    lastName: "Antony",
    username: "daniel@67",
    password: "67",
    bookmarks:[],
    avatar:pic6,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile:"https://logapriya.netlify.app/",
    bio:"Lost in a world of vibrant eccentricity. Embracing the delightful madness that sets my soul free."
  },
  {
    _id: uuid(),
    firstName: "Koshika",
    lastName: "Sukumar",
    username: "koshi@12",
    password: "12",
    bookmarks:[],
    avatar:pic7,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profile:"https://www.linkedin.com/in/logapriyasampathkumar/",
    bio:"Whisking dreams into reality, one recipe at a time. A girl with a passion for cooking, creating flavors that ignite the senses."
  },
  {
    _id: uuid(),
    firstName: "Emmy",
    lastName: "wong",
    username: "emmy@09",
    password: "09",
    bookmarks:[],
    avatar:pic2,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Fueled by passion, fueled by sweat. A relentless spirit on a yoga mat, finding balance and inner strength.",
    profile:"https://logapriya.netlify.app/"
  },
];
