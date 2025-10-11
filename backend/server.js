import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// app.use(cors({
//   origin: ['https://finalprescripto.netlify.app', 'https://adminprescripto.netlify.app',
//     'http://localhost:5173', // for dev
//     'http://localhost:5174', // for admin dev
//   ],
//   credentials: true,
// }))


app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests like Postman

    const allowedOrigins = [
      'https://finalprescripto.netlify.app',
      'https://adminprescripto.netlify.app',
      'http://localhost:5173',
      'http://localhost:5174'
    ];

    // Allow Netlify preview URLs dynamically
    const netlifyPreviewRegex = /^https:\/\/.*--finalprescripto\.netlify\.app$/;

    if (allowedOrigins.includes(origin) || netlifyPreviewRegex.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  credentials: true,
}));


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))