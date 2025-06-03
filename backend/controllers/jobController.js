const Job = require("../models/Job");

// Get all jobs for logged-in user
const getJobs = async (req, res) => {
  const jobs = await Job.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(jobs);
};

// Create job
const createJob = async (req, res) => {
  const { company, position, status, notes } = req.body;

  const job = new Job({
    user: req.user._id,
    company,
    position,
    status,
    notes
  });

  const createdJob = await job.save();
  res.status(201).json(createdJob);
};

// Update job
const updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job || job.user.toString() !== req.user._id.toString()) {
    return res.status(404).json({ message: "Job not found or not authorized" });
  }

  job.company = req.body.company || job.company;
  job.position = req.body.position || job.position;
  job.status = req.body.status || job.status;
  job.notes = req.body.notes || job.notes;

  const updatedJob = await job.save();
  res.json(updatedJob);
};

// Delete job
const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job || job.user.toString() !== req.user._id.toString()) {
    return res.status(404).json({ message: "Job not found or not authorized" });
  }

  await job.remove();
  res.json({ message: "Job deleted" });
};

module.exports = { getJobs, createJob, updateJob, deleteJob };
