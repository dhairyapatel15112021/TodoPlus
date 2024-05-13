const jwt = require("jsonwebtoken");
const JWT_SECRET = "T1O2D3O4";
function authenticationHandler(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, JWT_SECRET);
        if (user && user.username) {
            req.username = user.username;
            next();
        }
        else {
            res.status(500).json({ "msg": "You are not signup with us" });
        }
    }
    catch (err) {
        res.status(500).json({ "msg": "something went wrong" });
    }
}

module.exports = authenticationHandler;