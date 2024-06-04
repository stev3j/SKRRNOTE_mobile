import Realm from "realm";
import Problem from "./models/Problem";
import Idea from "./models/Idea";

const realm = new Realm({ schema: [Problem.schema, Idea.schema] });

export default realm;