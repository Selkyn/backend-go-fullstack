const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
// const multer = require('../middleware/stuff');

// const Thing = require('../models/Thing') // require mon model Thing

const stuffCtrl = require('../controllers/stuff'); //on importe le controller stuff

//ajouter un thing à la bdd
router.post('/', auth, stuffCtrl.createThing ); //on peut rajouter auth pour utiliser le token


 //modifier un objet
router.put('/:id',auth, stuffCtrl.modifyThing);

 
//supprimer un objet
router.delete('/:id',auth, stuffCtrl.deleteThing);


 //on affiche un seul objet en clickan dessus, grace à :id , donc de facon dynamique
router.get('/:id',auth, stuffCtrl.getOneThing);


 //on recupere les objets de la bdd
router.get('/',auth, stuffCtrl.getAllThing);

  module.exports = router;