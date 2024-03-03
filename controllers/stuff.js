const Thing = require('../models/Thing'); //on importe le modele


//ajouter un thing à la bdd
exports.createThing = (req, res, next) => { //c'est ma fonction pour creer un objet
    delete req.body._id; // on supprime l id avant de copier thing
    const thing = new Thing({
        ...req.body //copie tous les champs de Thing grace à ...
    })
    thing.save() //save permet d enregistrer l objet dans la base
        .then(() => res.status(201).json({ message: 'Objet enregistré'})) //il faut renvoyer une reponse à la front end, sinon on aura l expiration de la requete
        .catch(error => res.status(400).json({ error }));
 };


 //modifier un objet
 exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id}) // updateOne pour modifier, les parametre :  1er argument = objet de comparaison c'est a dire l'objet qui a le meme id que l'id des parametre de requete
    // 2eme argument = la nouvelle version de l objet
    .then(things => res.status(200).json({message: "Objet modifié !"}))
    .catch(error => res.status(400).json({ error }));
 };


 //supprimer un objet
 exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé"}))
    .catch(error => res.status(400).json({ error }));
};


//on affiche un seul objet en clickan dessus, grace à :id , donc de facon dynamique
exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id}) //parametre de route dynamique
    .then(things => res.status(200).json(things))
    .catch(error => res.status(404).json({ error }));
};


//on recupere les objets de la bdd
exports.getAllThing = (req, res, next) => {
    Thing.find() //find permet de trouver tous les objets
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  };