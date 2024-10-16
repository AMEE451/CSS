const isValid = (req, res, nest) => {
    let { email, password, username } = req.body
    if (!email || !username || !password) {
        res.send("Invalid User")
    }
    else {
        next();
    }
}

module.exports = isValid;