// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  const db = context.services.get("mongodb-atlas").db("your_database_name");
  const collection = db.collection("your_collection_name");
  const book = collection.findOne0({title: "Something Like Home"});

  if (book)
    return book 
  else 
    return {success: false, data: {}}
};
