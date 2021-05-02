const { createClient } = require("@astrajs/collections")
const collection = 'tiktokposts'

exports.handler = async function(event, context, callback) {
  // create an Astra client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  })

  const posts = astraClient
          .namespace(process.env.ASTRA_DB_KEYSPACE)
          .collection(collection)
          const body = JSON.parse(event.body)
  
  try {
    posts.update(body.userId, body.data)

    return {
      statusCode: 200
    }
  } catch(e) {
    console.error(e)

    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
}