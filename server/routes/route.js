import express from "express";
import { getService, singleService, createService, deleteService, updateService, getPackage, singlePackage, createPackage, deletePackage, updatePackage } from "../controllers/service.js";

const router = express.Router();


router.get('/service', getService)
router.get('/service/singleservice/:id', singleService)
router.post('/service', createService)
router.delete('/service/:id', deleteService)
router.patch('/service/:id', updateService)

router.get('/package', getPackage)
router.get('/package/singlepackage/:id', singlePackage)
router.post('/package', createPackage)
router.patch('/package/:id', updatePackage)
router.delete('/package/:id', deletePackage)


export default router   