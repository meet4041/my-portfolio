const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // We will store the Image URL here
    required: true,
  },
  tags: [String], // Example: ["React", "Node.js", "CSS"]
  liveLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g., "Web App", "Mobile", "UI/UX"
    default: "Web App"
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Project', projectSchema);