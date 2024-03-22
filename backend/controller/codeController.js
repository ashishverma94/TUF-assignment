const axios = require("axios");
const express = require("express");
const CodeData = require("../model/CodeData");

const router = express.Router();

//  USER REGISTRATION
router.post("/runcode", async (req, res) => {
  try {
    const { code, language_id, input, name,output } = req.body;
console.log(req.body) ;
    const result = await CodeData.create({
      code,
      language_id,
      input,
      name,
      output,
    });

    res.status(201).json({
      success: true,
      message: result,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error", error });
  }
});

router.get("/getcodes", async (req, res) => {
  try {
    const allCodes = await CodeData.find();
    res.status(201).json({
      success: true,
      allCodes,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", error });
  }
});

module.exports = router;
