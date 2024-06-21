const Category = require("../models/Category");
const Bank =  require("../models/Bank")

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
      await Category.create({ name });
      req.flash('alertMessage', 'Success Add Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/category");
    } catch (error) {
      req.flash('alertMessage', `$(error.message)`);
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
      req.flash('alertMessage', `$(error.message)`);
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
        req.flash('alertMessage', `$(error.message)`);
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
      res.render("admin/bank/view-category", { 
        bank, 
        alert,
        title: "Staycation | Bank"
      });
    } catch (error) {
      req.flash('alertMessage', `$(error.message)`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
  },
  addBank: async (req, res) => {
    try {
      const { bankName, accountNumber, name } = req.body;
      await Bank.create({ bankName, accountNumber, name});
      req.flash('alertMessage', 'Success Add Bank');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash('alertMessage', `$(error.message)`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
  },
  editBank: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      req.flash('alertMessage', 'Success Update Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash('alertMessage', `$(error.message)`);
      req.flash('alertStatus', 'danger');
      res.redirect("/admin/bank");
    }
    
  },
  deleteBank: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.deleteOne({ _id: id });
      req.flash('alertMessage', 'Success Delete Category');
      req.flash('alertStatus', 'success');
      res.redirect("/admin/bank");
    } catch (error) {
        req.flash('alertMessage', `$(error.message)`);
        req.flash('alertStatus', 'danger');
        res.redirect("/admin/bank");
    }
  },

  viewItem: (req, res) => {
    res.render("admin/item/view-item", {
      title: "Staycation | Item"
    });
  },
  viewBooking: (req, res) => {
    res.render("admin/booking/view-booking", {
      title: "Staycation | Booking"
    });
  },
};
