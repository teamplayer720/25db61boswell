var express = require('express');
const car_controllers = require('../controllers/car');
var router = express.Router();

router.get('/', car_controllers.car_view_all_Page); 

/* GET detail costume page */
router.get('/detail', car_controllers.car_view_one_Page); 

/* GET create costume page */
router.get('/create', car_controllers.car_create_Page);

/* GET create update page */
router.get('/update', car_controllers.car_update_Page); 

/* GET delete costume page */
router.get('/delete', car_controllers.car_delete_Page);

/* GET update costume page */
router.get('/update', car_controllers.car_update_Page); 

/* GET update costume page */
router.get('/update', car_controllers.car_update_Page);


module.exports = router;