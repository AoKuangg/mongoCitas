import { MongoClient } from "mongodb";
import "dotenv/config";

const config = JSON.parse(process.env.ATLAS_CONNECTION);

const URL = `mongodb+srv://${config.user}:${config.password}@cluster0.j4ctnar.mongodb.net/${config.database}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export async function connDB () {
    const client = new MongoClient(URL, options);
    try {
        await client.connect();
        const db = client.db();
        return db;
    } catch (error) {
        throw new Error({ message: "Coneccion Rechazada", error: error})
    }
}