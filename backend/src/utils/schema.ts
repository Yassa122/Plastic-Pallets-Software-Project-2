import { makeSchema } from "nexus";

import mutations from "../mutations";
import types from "../types";
import queries from "../queries";

const schema = makeSchema({
  types: [types, queries, mutations],
});

export default schema;
