function FetchHelper() {
  const baseUri = "http://localhost:8080";

  return {
    list: {
      get: async (dtoIn) => {
        return await Call(baseUri, "list/get", dtoIn, "get");
      },
      create: async (dtoIn) => {
        return await Call(baseUri, "list/create", dtoIn, "post");
      },
      update: async (dtoIn) => {
        return await Call(baseUri, "list/update", dtoIn, "post");
      },
      list: async () => {
        return await Call(baseUri, "list/list", null, "get");
      },
      delete: async () => {
        return await Call(baseUri, "list/delete", null, "delete");
      },
    },
  };
}

export default FetchHelper;
