import { MongoClient, ServerApiVersion } from 'mongodb';
import {MONGO_URI} from '$env/static/private';



export async function load() {
    const client = new MongoClient(MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    try {
        await client.connect();
        const database = client.db('responses');
        const collection = database.collection('people');
        const data = await collection.find({}).toArray();

        const data2 = data.map(obj => {
          // Use the delete operator to remove the field
          delete obj._id;
          return obj;
        });
        return {data:data2};
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return {data:[]};
    } finally {
        await client.close();
    }
}



/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const stateSymbol = Object.getOwnPropertySymbols(data)[0];
    const stateValue = data[stateSymbol];
    const idValue = stateValue.find(entry => entry.name === 'id').value;
    console.log(idValue)


    const client = new MongoClient(MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    
    try {
      await client.connect();
      const database = client.db('responses');
      const collection = database.collection('people');
      const resp = await collection.deleteOne({id: idValue});
      console.log(resp)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return {data:[]};
    } finally {
        if (client) await client.close();
    }

  }
}