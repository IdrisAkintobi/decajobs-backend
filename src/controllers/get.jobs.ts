import asyncHandler from "express-async-handler";
import Jobs from "../model/job.model";
// @desc get Jobs
// @route GET /joblist
// @access public

const getJobs = asyncHandler(async (req, res): Promise<any> => {
  let { category, city, joblist } = req.body;
  //If value is frontend placeholder make it null
  if (category === "Select Category") category = undefined;
  if (city === "Choose Region") city = undefined;

  const page = +req.query.page! || 1;
  const itemPP = 6;
  const pageIndex = page - 1;

  //Get all jobs

  const allJobs = await Jobs.find({
    $or: [{ title: joblist }, { companyName: joblist }],
    category,
    location: city,
  })
    .sort({ _id: 1 })
    .skip(pageIndex * itemPP)
    .limit(itemPP);

  if (allJobs.length) return res.status(200).json(allJobs);
  else {
    return res.status(400).json({ message: "No available job for your query" });
  }
});
export default getJobs;
