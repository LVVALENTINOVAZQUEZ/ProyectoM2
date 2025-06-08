 const validate = (req, res, next) => {
    const {body: { email }} = req


    if (email === "vasku@gmail.com"){
        next()
    } else{
        return res.send('email invalido')
    }
}

module.exports = validate