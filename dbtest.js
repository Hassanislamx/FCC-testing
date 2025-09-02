const { MongoClient } = require("mongodb");

// Use your MongoDB connection string here
const uri = process.env.MONGO_URI;  

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("testdb");  // change to your database name
    const users = db.collection("users");

    // Insert test document
    await users.insertOne({ name: "Hassan", time: new Date() });

    // Fetch documents
    const allUsers = await users.find().toArray();
    console.log("Stored documents:", allUsers);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
