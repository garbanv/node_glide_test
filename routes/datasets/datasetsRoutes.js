const express = require('express')
const router = express.Router()
const accreditationListController = require('../../controllers/datasets/accreditationListControllers.js')
const api_specificationController = require('../../controllers/datasets/api_specificationControllers.js')
const countriesController = require('../../controllers/datasets/countriesControllers.js')
const diversityCategoryController = require('../../controllers/datasets/diversityCategoryControllers.js')
const entitiesController = require('../../controllers/datasets/entitiesControllers.js')
const entitiesAccreditationController = require('../../controllers/datasets/entitiesAccreditationControllers.js')
const entityTypesController = require('../../controllers/datasets/entityTypesControllers.js')
const fintechMainController = require('../../controllers/datasets/fintechMainControllers.js')
const productCatalogController = require('../../controllers/datasets/productCatalogControllers.js')
const industryGroupsController = require('../../controllers/datasets/industryGroupsControllers.js')
const securityTechnologyController = require('../../controllers/datasets/securityTechnologyControllers.js')

const {validateJwt} = require('../../middlewares/auth.js')
 

// router.get("/getTable",controller.getDataFromTableName)router
router.get("/accreditation_list",validateJwt,accreditationListController.getAllAccreditationList)
router.get("/api_specification",validateJwt,api_specificationController.getAllApiSpecification)
router.get("/countries",validateJwt,countriesController.getAllCountries)
router.get("/diversity_category",validateJwt,diversityCategoryController.getAllDiversityCategory)
router.get("/entities",validateJwt,entitiesController.getAllEntities)
router.get("/entity_types",validateJwt,entityTypesController.getAllEntityTypes)
router.get("/entities_accreditation",validateJwt,entitiesAccreditationController.getAllEntitiesAccreditation)
router.get("/diversity_category",validateJwt,diversityCategoryController.getAllDiversityCategory)

router.get("/fintech_main",validateJwt,fintechMainController.getAllFintechMain)
router.get("/product_catalog",validateJwt,productCatalogController.getAllProductCatalog)
router.get("/industry_groups",validateJwt,industryGroupsController.getAllIndustryGroups)
router.get("/security_technology",validateJwt,securityTechnologyController.getAllSecurityTechnology)


module.exports = router