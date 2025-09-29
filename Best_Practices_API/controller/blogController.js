const BLOG = require("../model/blogSchema");

// Create Blog
const CreateNewBlog = async (req, res) => {
  try {
    const { title, description, category, content } = req.body;
    const exists = await BLOG.exists({ title });
    if (exists)
      return res
        .status(400)
        .json({ success: false, message: "Blog Already Exists! Create with another title" });

    const newBlog = await BLOG.create({ title, description, category, content });
    return res.status(201).json({ success: true, message: "Blog Created Successfully", newBlog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Blog Creation Failed!", error });
  }
};

// Update Blog
const UpdateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, content } = req.body;

    const blog = await BLOG.findById(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog Not Found" });

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.category = category || blog.category;
    blog.content = content || blog.content;

    const updated = await blog.save();
    return res.status(200).json({ success: true, message: "Blog Updated Successfully", updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Blog Updation Failed!", error });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await BLOG.findById(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog Not Found" });

    await BLOG.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Blog Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Blog Deletion Failed!", error });
  }
};

// Get All Blogs
const getBlog = async (req, res) => {
  try {
    // Query params se page aur limit lena, default values set karna
    let { page, limit } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    // Total blogs count
    const total = await BLOG.countDocuments();

    // Fetch blogs with skip and limit
    const blogs = await BLOG.find()
      .skip((page - 1) * limit) // Skip previous pages
      .limit(limit)             // Limit number of blogs per page
      .sort({ createdAt: -1 }); // Latest blogs first

    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ success: false, message: "No Blogs Found" });
    }

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      blogs
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error });
  }
};

module.exports = { CreateNewBlog, UpdateBlog, deleteBlog, getBlog };
