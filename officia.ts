import { toArray } from "react-router-dom";

const location = toArray({ pathname: "/home" });
console.log(location); // [{ pathname: "/home" }]
