import Realm from "realm";

class Problem extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  description!: string;

  static schema = {
    name: "Problem",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      description: "string",
    },
  };
}

export default Problem;