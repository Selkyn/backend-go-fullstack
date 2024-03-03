const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => { // on exporte ce middleware
    try{   // on doit recuperer le token, on doit donc enlever le bearer devant le token
        const token = req.headers.authorization.split(' ')[1]; // on divise le token en un tableau pour pouvoir enlever le bearer devant le token avec split
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); //on decode le token avec la methode verify
        const userId = decodedToken.userId; // on recuepre le user id en particulier que l'on decode
        req.auth = { //on rajoute cette valeur à l objet request qui sera transmis aux routes
            userId: userId
        };
    next();
    } catch(error) {
        res.status(401).json({ error });
    }
};

