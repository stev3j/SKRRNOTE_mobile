import Realm from "realm";

class Idea extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  description!: string;
  relatedProblem!: string;

  static schema = {
    name: "Idea",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      description: "string",
      relatedProblem: "string",
    },
  };
}

export default Idea;