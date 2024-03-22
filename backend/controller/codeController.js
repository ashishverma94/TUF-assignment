const axios = require("axios");
const express = require("express");
const CodeData = require("../model/CodeData");

const router = express.Router();

//  USER REGISTRATION
router.post("/runcode", async (req, res) => {
  try {
    const { code, language_id, input, name } = req.body;
    // const submissionResponse = await axios.post(
    //   "https://judge0-ce.p.rapidapi.com/submissions",
    //   {
    //     source_code: code,
    //     language_id: language_id,
    //     stdin: input || "",
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    //       "x-rapidapi-key": process.env.RAPID_API_KEY,
    //     },
    //   }
    // );

    // const submissionToken = submissionResponse.data.token;

    // const resultResponse = await axios.get(
    //   `https://judge0-ce.p.rapidapi.com/submissions/${submissionToken}`,
    //   {
    //     headers: {
    //       "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    //       "x-rapidapi-key": process.env.RAPID_API_KEY,
    //     },
    //   }
    // );

    // const output = resultResponse.data.stdout;
    const result = await CodeData.create({
      code,
      language_id,
      input,
      name,
      // output,
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
