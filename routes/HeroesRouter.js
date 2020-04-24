const express = require ("express")
const router = express.Router();
const HeroesContainer = require ("../controllers/Heroescontainer")

router.post('/post',HeroesContainer.create);
router.get ('/get',HeroesContainer.getData);
router.get ('/get/:heroesId', HeroesContainer.getDatabyID)
router.delete('/delete/:heroesId',HeroesContainer.deleteByID)
router.put('/edit/:heroesID',HeroesContainer.editById)

module.exports = router;
