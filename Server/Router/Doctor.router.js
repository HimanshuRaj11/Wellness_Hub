const router = require("express").Router();


const { RegisterDoctor, LoginDoctor, DoctorProfile, DoctorUpdateProfile, FetchDoctor, Logout, fetchAllDoctors, fetchDoctorbyId } = require("../Controller/Doctor.controller");
const verifyToken = require("../Middleware/VerifyUser");

router.post("/api/v1/register", RegisterDoctor);
router.post("/api/v1/Login", LoginDoctor);
router.get("/api/v1/Profile",verifyToken, DoctorProfile);
router.post("/api/v1/Update-Profile",verifyToken, DoctorUpdateProfile);
router.get("/api/v1/fetch-doctor",verifyToken, FetchDoctor);
router.get("/api/v1/logout-doctor",verifyToken, Logout);
router.get("/api/v1/fetch-all-doctor", fetchAllDoctors);
router.get("/api/v1/fetch-doctor-by-id/:_id", fetchDoctorbyId);



module.exports = router;