import dotenv from 'dotenv'
dotenv.config()

export default{
    MONGO_URI: process.env.MONGO_URL,
    COOKIES_KEY: process.env.COOKIES_SECRET,
    PORT: process.env.PORT,
}