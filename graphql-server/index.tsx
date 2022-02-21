const { ApolloServer, gql } = require("apollo-server");
const { getDB } = require("./mysql");

const typeDefs = gql`
  type Todo {
    id: Int
    description: String
    isFinished: Boolean
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(description: String!): Todo
    updateTodo(id: Int!, description: String!): Todo
    finishTodo(id: Int!): Todo
    deleteTodo(id: Int!): Todo
    deleteTodos(ids: [Int]!): Todo
  }
`;

const resolvers = {
  Query: {
     /**
     * This is the function to get all todo from database
     * @param 
     * @returns
     * @throws
     */
    todos: async () => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM todo", (err, todos) => {
          if (err) {
            reject(err);
          } else {
            resolve(todos);
          }
        });
      });
    },
  },

  Mutation: {
    /**
     * This is the function to create todo in database
     * @param parent 
     * @param args - these are the arguments for the mutation 
     * @param context
     * @param info
     * @returns
     * @throws
     */
    addTodo: async (parent, args, context, info) => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO todo (description) VALUES ( "${args.description} " );`,
          (err, addTodo) => {
            if (err) {
              reject(err);
            } else {
              resolve(addTodo);
            }
          }
        );
      });
    },
     /**
     * This is the function to update todo in database
     * @param parent 
     * @param args - these are the arguments for the mutation 
     * @param context
     * @param info
     * @returns
     * @throws
     */
    updateTodo: async (parent, args, context, info) => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query(
          `UPDATE todo SET description = "${args.description}" WHERE id = "${args.id}";`,
          (err, updateTodo) => {
            if (err) {
              reject(err);
            } else {
              resolve(updateTodo);
            }
          }
        );
      });
    },


     /**
     * This is the function to delete selected todos in database
     * @param parent 
     * @param args - these are the arguments for the mutation 
     * @param context
     * @param info
     * @returns
     * @throws
     */
    deleteTodos: async (parent, args, context, info) => {
      const db = await getDB();
      console.log(args.ids);
      return new Promise((resolve, reject) => {
        db.query(
          `DELETE FROM todo WHERE id IN (${args.ids});`,
          (err, deleteTodos) => {
            if (err) {
              reject(err);
            } else {
              resolve(deleteTodos);
            }
          }
        );
      });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
