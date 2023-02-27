const express = require("express");
const { addOwner , getOwners, getSingleOwner, deleteOwner, updateOwner, addRest, findOwnerResturent} = require("../owners/owner");

const router = express.Router();

router.post("/", addOwner)
router.get("/", getOwners)
router.get("/:id", getSingleOwner)
router.delete("/:id", deleteOwner)
router.patch("/:id", updateOwner)
router.post("/:id/rest", addRest)
router.get("/:id/rest", findOwnerResturent)

module.exports = router;