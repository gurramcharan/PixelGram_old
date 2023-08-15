import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
export const posts = [
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1559608622-d443df453289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZiUyMGxvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    media_type: "image",
    content: "To fall in love with yourself is the first secret to happiness.",
    likes: {
      likeCount: 32,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gurramcharan",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2023-05-04")),
    createdAt: new Date("2023-05-04"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    media_type: "image",
    content: "Escape the ordinary and stay crazy",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    username: "koshi@12",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2023-04-12")),
    createdAt: new Date("2023-04-12"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1615224299941-04a854c101d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    media_type: "image",
    content:
      "A recipe has no soul. You, as the cook, must bring the soul to the recipe ",
    likes: {
      likeCount: 104,
      likedBy: [],
      dislikedBy: [],
    },
    username: "koshi@12",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2023-01-09")),
    createdAt: new Date("2023-01-09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1610928712141-a292b96f43e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    media_type: "image",
    content: "You must be the change you wish to see in the world....",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "loga@1612",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2022-12-08")),
    createdAt: new Date("2022-12-08"),

    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    media_type: "image",
    content: "A fit body, a calm mind, a house full of love ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emmy@09",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2022-09-02")),
    createdAt: new Date("2022-09-02"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    post_img:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    media_type: "image",
    content:
      "Find the Prospective that transforms the ordinary into the extraordinary",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emmi@09",
    createdAt_format: new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeZone: "Australia/Sydney",
    }).format(new Date("2023-07-12")),
    createdAt: new Date("2023-07-12"),
    updatedAt: formatDate(),
  },
];
