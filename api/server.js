require("dotenv").config();
//console.log(process.env)
const axios = require("axios");
const https = require("https");
const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
// Import the library aLLOW CROS Policy orign:
var cors = require("cors");
const path = require("path");
const app = express();
const router = express.Router();

const jwt = require("jsonwebtoken");

// Then use it before your routes are set up:
app.use(cors());
const FileUpload = require("./models/fileupload");
const upload = require("./utils/uploadFiles");

//middleware
//for json reuest
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
require("dotenv").config();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started port : " + port));

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

//Production Setup
if (process.env.NODE_ENV == "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//DB Setup
mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MonogoDB Dababase..."))
  .catch((err) => console.log("Database connection error :" + err));

//http call
app.get("/mitaan", async (req, res) => {
  const url =
    "https://edistrict.cgstate.gov.in/EdistrictAPI/Api/mitaan?appRefNo=0705012201000546&username=chipsmitaan&password=chipsmitaan";

  // At request level
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const result = await axios.get(url, { httpsAgent: agent });
  res.status(200).json({
    message: result.data,
  });
});

//API Calling
//Test API
app.get("/avinash", (req, res) => {
  res.status(200).json({
    message: "avinash",
  });
});

//Category API
var PassCatAPI = require("./routes/add-category");
app.use("/api", PassCatAPI);

//user API
var UserAPI = require("./routes/user");
app.use("/userapi", UserAPI);

//todo API
app.use("/api/todo", require("./routes/toto"));

app.use("/index", async (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//upload file save
app.use("/user-profile", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const total = req.body.total;
  const profileImg = url + "/public/" + req.file.filename;
  console.log(req.body);
  console.log(req.file);

  const newUser = new FileUpload({
    total: total,
    profileImg: profileImg,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

router.route("/update").post(
  upload.fields([
    { name: "itineraryImage", maxCount: 1 },
    { name: "itineraryCoverImage", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log(req.files);
    //res.sendFile(path.join(__dirname, "/index.html"));
    res.send(req.files);
    res.end("done");
  }
);

//JWT token implemntation
const users = [
  {
    id: "1",
    username: "avi",
    password: "avi",
    isAdmin: true,
  },
  {
    id: "2",
    username: "puru",
    password: "puru",
    isAdmin: false,
  },
];

let refreshTokens = [];

app.post("/refresh", (req, res) => {
  //take token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invaild
  if (!refreshToken) return res.status(401).json("You are not authnticated.");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not vaild!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    //if everythin is ok, create new access token, refresh tokand and send user
    err && console.log(err);

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefereshToken = generateRefreshToken(user);

    refreshTokens.push(newRefereshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefereshToken,
    });
  });
});

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "15m",
  });
};
generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    // res.json(user)
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json("username or password incorrect");
  }
});



const verfiy = (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not vaild!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

app.delete("/user/:userId", verfiy, (req, res) => {
  console.log(req.user.isAdmin);
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted.");
  } else {
    res.status(400).json("You are not allowed to deleted this user.");
  }
});
//Logout
app.post("/logout", verfiy,(req,res)=>{
  const refreshToken = req.body.token;
  refreshTokens=refreshTokens.filter((token)=>token!==refreshToken);
  res.status(200).json("You logged out successfully.");
})