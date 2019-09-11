import index from "@/views/app";
import data from "@/views/data";

export default [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/data",
    name: "data/",
    component: index
  },
  {
    path: "/data/:user",
    name: "data",
    component: data
  }
]
