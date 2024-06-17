// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  const db = context.services.get("mongodb-atlas").db("Test");
  const collection = db.collection("Books");
  const book = collection.findOne({title: "Something Like Home"});

  if (book!=null)
    return book 
  else 
    return {success: false, data: {}}
};
