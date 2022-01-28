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
     * @param {string} parent - This is the aprent wejqwhewqe
     * @param args
     * @param context
     * @param info
     * @returns
     * @throws {Error} this is qweqwe
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

    finishTodo: async (parent, args, context, info) => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query(
          `UPDATE todo SET isFinished = true WHERE id = "${args.id}";`,
          (err, finishTodo) => {
            if (err) {
              reject(err);
            } else {
              resolve(finishTodo);
            }
          }
        );
      });
    },

    deleteTodo: async (parent, args, context, info) => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query(
          `DELETE FROM todo WHERE id = "${args.id}";`,
          (err, deleteTodo) => {
            if (err) {
              reject(err);
            } else {
              resolve(deleteTodo);
            }
          }
        );
      });
    },

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
