// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  const db = context.services.get("mongodb-atlas").db("your_database_name");
  const collection = db.collection("your_collection_name");
  const book = collection.findOne({_id: "65ff1fb51c5f682b7e242a56"});

  if (book!=null)
    return book 
  else 
    return {success: false, data: {}}
};
