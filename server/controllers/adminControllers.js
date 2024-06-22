const Category = require("../models/Category");
const Bank =  require("../models/Bank");
const Item =  require("../models/Item");
const Image = require("../models/Image");
const cloudinary = require("../utils/cloudinary");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view-dashboard", {
      title: "Staycation | Dashboard"
    });
  },
  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = {
        message: alertMessage,
        status: alertStatus,
      }
      res.render("admin/category/view-category", { 
        category, 
        alert,
        title: "Staycation | Category"
      });
    } catch (error) {
        res.redirect("/admin/category");
    }
  },
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      console.log(req.body);
      await Category.create({ name });
      req.flash('alertMessage', 'Success Add Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/category");
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/category");
    }
  },
  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      req.flash('alertMessage', 'Success Update Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/category");
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/category");
    }
    
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.deleteOne({ _id: id });
      req.flash('alertMessage', 'Success Delete Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/category");
    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect("/admin/category");
    }
  },

  viewBank: async(req, res) => {
    try {
      const bank = await Bank.find();
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = {
        message: alertMessage,
        status: alertStatus
      };
      res.render("admin/bank/view-bank", { 
        bank, 
        alert,
        title: "Staycation | Bank"
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
  },
  addBank: async (req, res) => {
    try {
      const { bankName, accountNumber, name } = req.body;
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinary.uploader.upload(dataURI);
      const { secure_url } = cldRes;
      console.log(secure_url);
      await Bank.create({bankName, accountNumber, name, imageUrl: secure_url});
      req.flash('alertMessage', 'Success Add Bank');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
  },
  editBank: async (req, res) => {
    try {
      const { id, bankName, accountNumber, name, image } = req.body;
      const bank = await Bank.findOne({ _id: id });
      bank.bankName = bankName;
      bank.accountNumber = accountNumber;
      bank.name = name;
      if(req.file != undefined) {
        let pathname = new URL(image).pathname;
        const path = pathname.split("/");
        const filename = path.pop().split(".")[0];
        await cloudinary.uploader.destroy(filename);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await cloudinary.uploader.upload(dataURI);
        const { secure_url } = cldRes;
        bank.imageUrl = secure_url;
      }
      await bank.save();
      req.flash('alertMessage', 'Success Update Bank');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
    
  },
  deleteBank: async (req, res) => {
    try {
      const { id } = req.params;
      const url = await Bank.findOne({ _id: id });
      let pathname = new URL(url.imageUrl).pathname;
      const path = pathname.split("/");
      const filename = path.pop().split(".")[0];
      const bank = await Bank.deleteOne({ _id: id });
      await cloudinary.uploader.destroy(filename);
      req.flash('alertMessage', 'Success Delete Bank');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect("/admin/bank");
    }
  },
  viewItem: async (req, res) => {
   try {
    const items = await Item.find()
    .populate({
      path: "imageId", 
      select: "id imageUrl"
    })
    .populate({
      path: "categoryId", 
      select: "id name"
    });
    const categories = await Category.find();
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = {
      message: alertMessage,
      status: alertStatus
    };
     res.render("admin/item/view-item", {
        title: "Staycation | Item",
        categories,
        alert,
        items
    });
   } catch (error) {
    req.flash('alertMessage', `${error.message}`);
    req.flash('alertStatus', 'danger');
    res.redirect("/admin/item");
   }
  },
  addItem: async (req, res) => {
    try {
      const { categoryId, title, price, country, state, city, description } = req.body;
      description = description.replace(/\n/g, "<br>");
      if(req.files.length > 0) {
        const category = await Category.findOne({_id: categoryId})
        const newItem = {
          title,
          price,
          country,
          state,
          city, 
          description,
          categoryId
        }
        console.log(newItem)
        const item = await Item.create(newItem);
        category.itemId.push({_id: item._id});
        await category.save();
        for(let i = 0; i < req.files.length; i++) {
          const b64 = Buffer.from(req.files[i].buffer).toString("base64");
          let dataURI = "data:" + req.files[i].mimetype + ";base64," + b64;
          const cldRes = await cloudinary.uploader.upload(dataURI);
          const { secure_url } = cldRes;
          console.log(secure_url);
          const imageSave = await Image.create({ imageUrl: secure_url });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
      }
      req.flash('alertMessage', 'Success Add Item');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/item");
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/item");
    }
  },
  editItem: async (req, res) => {
    try {
      const { id, categoryId, title, price, country, state, city, description } = req.body;
    } catch (error) {
    }
  },
  viewBooking: (req, res) => {
    res.render("admin/booking/view-booking", {
      title: "Staycation | Booking"
    });
  },
};
