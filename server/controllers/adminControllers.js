const Category = require("../models/Category");
const Bank = require("../models/Bank");
const Item = require("../models/Item");
const Image = require("../models/Image");
const Feature = require("../models/Feature");
const Activity = require("../models/Activity");
const User = require("../models/Users")
const Booking = require("../models/Booking");
const Member = require("../models/Member");
const cloudinary = require("../utils/cloudinary");
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  viewSignIn: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      if(req.session.user == null || req.session.user == undefined){
        res.render("index", {
          alert,
          title: "Staycation | Login",
        });
    } else {
        res.redirect('/admin/dashboard');
    }
      
    } catch (error) {
      res.redirect("admin/signin");
    }
  },
  actionSignin: async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = await Users.findOne({username : username});
      if (!user) {
        req.flash("alertMessage", "User Not Found!!!");
        req.flash("alertStatus", "danger");
        return res.redirect("/admin/signin");
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch){
        req.flash("alertMessage", "Wrong Password!!");
        req.flash("alertStatus", "danger");
        return res.redirect("/admin/signin");
      }
      req.session.user = {
        id: user.id,
        username : user.username
      }
      return res.redirect("/admin/dashboard");
    } catch (error) {
      return res.redirect("/admin/signin");
    }
  },
  actionLogout: (req, res) => {
    req.session.destroy();
    res.redirect('/admin/signin');
  },
  viewDashboard: async (req, res) => {
    const member = await Member.find();
    const booking = await Booking.find();
    const item = await Item.find();
   try {
    res.render("admin/dashboard/view-dashboard", {
      title: "Staycation | Dashboard",
      user: req.session.user,
      member,
      booking,
      item
    });
   } catch (error) {
    res.redirect("/admin/signin")
   }
  },
  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render("admin/category/view-category", {
        category,
        alert,
        title: "Staycation | Category",
        user: req.session.user
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
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },
  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      req.flash("alertMessage", "Success Update Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.deleteOne({ _id: id });
      req.flash("alertMessage", "Success Delete Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  viewBank: async (req, res) => {
    try {
      const bank = await Bank.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render("admin/bank/view-bank", {
        bank,
        alert,
        title: "Staycation | Bank",
        user: req.session.user
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
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
      await Bank.create({
        bankName,
        accountNumber,
        name,
        imageUrl: secure_url,
      });
      req.flash("alertMessage", "Success Add Bank");
      req.flash("alertStatus", "success");
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
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
      if (req.file != undefined) {
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
      req.flash("alertMessage", "Success Update Bank");
      req.flash("alertStatus", "success");
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
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
      req.flash("alertMessage", "Success Delete Bank");
      req.flash("alertStatus", "success");
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/bank");
    }
  },
  viewItem: async (req, res) => {
    try {
      const items = await Item.find()
        .populate({
          path: "imageId",
          select: "id imageUrl",
        })
        .populate({
          path: "categoryId",
          select: "id name",
        });
      const categories = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render("admin/item/view-item", {
        title: "Staycation | Item",
        categories,
        alert,
        items,
        action: "view",
        user: req.session.user
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  addItem: async (req, res) => {
    try {
      const { categoryId, title, price, country, state, city, description } =
        req.body;
      if (req.files.length > 0) {
        const category = await Category.findOne({ _id: categoryId });
        const newItem = {
          title,
          price,
          country,
          state,
          city,
          description,
          categoryId,
        };
        const item = await Item.create(newItem);
        category.itemId.push({ _id: item._id });
        await category.save();
        for (let i = 0; i < req.files.length; i++) {
          const b64 = Buffer.from(req.files[i].buffer).toString("base64");
          let dataURI = "data:" + req.files[i].mimetype + ";base64," + b64;
          const cldRes = await cloudinary.uploader.upload(dataURI);
          const { secure_url } = cldRes;
          const imageSave = await Image.create({ imageUrl: secure_url });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
      }
      req.flash("alertMessage", "Success Add Item");
      req.flash("alertStatus", "success");
      res.redirect("/admin/item");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  showImageItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate({
        path: "imageId",
        select: "id imageUrl",
      });
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render("admin/item/view-item", {
        title: "Staycation | Show Image",
        alert,
        item,
        action: "showImage",
        user: req.session.user
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  showEditItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "imageId",
          select: "id imageUrl",
        })
        .populate({
          path: "categoryId",
          select: "id name",
        });
      const categories = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render("admin/item/view-item", {
        title: "Staycation | Edit Item",
        categories,
        alert,
        item,
        action: "edit",
        user: req.session.user
      });
    } catch (error) {
      console.log("malah kesini");
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  editItem: async (req, res) => {
    try {
      const { id } = req.params;
      const { categoryId, title, price, country, state, city, description } =
        req.body;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "imageId",
          select: "id imageUrl",
        })
        .populate({
          path: "categoryId",
          select: "id name",
        });
      if (req.files.length > 0) {
        for (let i = 0; i < item.imageId.length; i++) {
          let image = await Image.findOne({ _id: item.imageId[i]._id });
          let pathname = new URL(image.imageUrl).pathname;
          const path = pathname.split("/");
          const filename = path.pop().split(".")[0];
          await cloudinary.uploader.destroy(filename);
          await Image.deleteOne({ _id: item.imageId[i]._id });
        }
        item.imageId=[] //empty the imageId that store in item
        for (let i = 0; i < req.files.length; i++) {
          const b64 = Buffer.from(req.files[i].buffer).toString("base64");
          let dataURI = "data:" + req.files[i].mimetype + ";base64," + b64;
          const cldRes = await cloudinary.uploader.upload(dataURI);
          const { secure_url } = cldRes;
          const imageSave = await Image.create({ imageUrl: secure_url });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
        req.flash("alertMessage", "Success Update Item");
        req.flash("alertStatus", "success");
        res.redirect("/admin/item");
      } else {
        item.title = title;
        item.price = price;
        item.country = country;
        item.state = state;
        item.city = city;
        item.description = description;
        item.categoryId = categoryId;
        await item.save();
        req.flash("alertMessage", "Success Update Item");
        req.flash("alertStatus", "success");
        res.redirect("/admin/item");
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  viewDetailItem: async(req, res) => {
    const {itemId} = req.params;
    const alertMessage = req.flash("alertMessage");
    const alertStatus = req.flash("alertStatus");
    const alert = {
      message: alertMessage,
      status: alertStatus,
    };
    const feature = await Feature.find({itemId : itemId});
    const activity = await  Activity.find({itemId : itemId});

    try {
      res.render("admin/item/detail_item/view_detail_item", {
        title: "Staycation | Detail Item",
        alert,
        itemId,
        feature,
        activity,
        user: req.session.user
      })
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  addFeature: async (req, res) => {
    const { name, qty, itemId } = req.body;
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinary.uploader.upload(dataURI);
      const { secure_url } = cldRes;
      if(!req.file){
        req.flash("alertMessage", "Image not found");
        req.flash("alertStatus", "danger");
        res.redirect(`/admin/item/show-detail-item/${itemId}`);
      }
      const feature = await Feature.create({
        name,
        qty,
        imageUrl: secure_url,
        itemId
      });

      const item = await Item.findOne({_id: itemId});
      item.featureId.push({_id:feature._id});
      await item.save();
      req.flash("alertMessage", "Success Add Feature");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  editFeature: async (req, res) => {
    try {
      const { id, name, qty, image, itemId } = req.body;
      const feature = await Feature.findOne({ _id: id });
      feature.name = name;
      feature.qty = qty;
      if (req.file != undefined) {
        let pathname = new URL(image).pathname;
        const path = pathname.split("/");
        const filename = path.pop().split(".")[0];
        await cloudinary.uploader.destroy(filename);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await cloudinary.uploader.upload(dataURI);
        const { secure_url } = cldRes;
        feature.imageUrl = secure_url;
      }
      await feature.save();
      req.flash("alertMessage", "Success Update Feature");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  deleteFeature: async (req, res) => {
    const { id, itemId } = req.params;
    try {
      const url = await Feature.findOne({ _id: id });
      let pathname = new URL(url.imageUrl).pathname;
      const path = pathname.split("/");
      const filename = path.pop().split(".")[0];
      const feature = await Feature.findOne({ _id: id });
      const item = await Item.findOne({_id:itemId}).populate('featureId');
      for(let i=0; i < item.featureId.length; i++){
        if(item.featureId[i]._id.toString() === feature._id.toString())
        {
            await Item.findByIdAndUpdate(itemId, {$pull : { featureId : feature._id}});
        }
      }
      await Feature.deleteOne({_id : id});
      await cloudinary.uploader.destroy(filename);
      req.flash("alertMessage", "Success Delete Feature");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  addActivity: async (req, res) => {
    const { name, type, itemId } = req.body;
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinary.uploader.upload(dataURI);
      const { secure_url } = cldRes;
      if(!req.file){
        req.flash("alertMessage", "Image not found");
        req.flash("alertStatus", "danger");
        res.redirect(`/admin/item/show-detail-item/${itemId}`);
      }
      const activity = await Activity.create({
        name,
        type,
        imageUrl: secure_url,
        itemId
      });

      const item = await Item.findOne({_id: itemId});
      item.activityId.push({_id:activity._id});
      await item.save();
      req.flash("alertMessage", "Success Add Activity");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  editActivity: async (req, res) => {
    try {
      const { id, name, type, image, itemId } = req.body;
      const activity = await Activity.findOne({ _id: id });
      activity.name = name;
      activity.type = type;
      if (req.file != undefined) {
        let pathname = new URL(image).pathname;
        const path = pathname.split("/");
        const filename = path.pop().split(".")[0];
        await cloudinary.uploader.destroy(filename);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await cloudinary.uploader.upload(dataURI);
        const { secure_url } = cldRes;
        activity.imageUrl = secure_url;
      }
      await activity.save();
      req.flash("alertMessage", "Success Update Activity");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  deleteActivity: async (req, res) => {
    const { id, itemId } = req.params;
    try {
      const url = await Activity.findOne({ _id: id });
      let pathname = new URL(url.imageUrl).pathname;
      const path = pathname.split("/");
      const filename = path.pop().split(".")[0];
      const activity = await Activity.findOne({ _id: id });
      const item = await Item.findOne({_id:itemId}).populate('activityId');
      for(let i=0; i < item.activityId.length; i++){
        if(item.activityId[i]._id.toString() === activity._id.toString())
        {
            await Item.findByIdAndUpdate(itemId, {$pull : { activityId : activity._id}});
        }
      }
      await Activity.deleteOne({_id : id});
      await cloudinary.uploader.destroy(filename);
      req.flash("alertMessage", "Success Delete Activity");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/show-detail-item/${itemId}`);
    }
  },
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate('imageId');
      for (let i = 0; i < item.imageId.length; i++) {
        Image.findOneAndDelete({ _id: item.imageId[i]._id }).then((image)=>{
          let pathname = new URL(image.imageUrl).pathname;
          const path = pathname.split("/");
          const filename = path.pop().split(".")[0];
          cloudinary.uploader.destroy(filename);
          console.log(item.imageId[i]._id)
        }).catch((err)=>{
          req.flash("alertMessage", `${err.message}`);
          req.flash("alertStatus", "danger");
          res.redirect("/admin/item");
        });
      }
      await Item.deleteOne({ _id: id });
      req.flash("alertMessage", "Success Delete Item");
      req.flash("alertStatus", "success");
      res.redirect("/admin/item");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },
  viewBooking: async (req, res) => {
    try {
      const booking = await Booking.find()
      .populate('memberId')
      .populate('bankId');
      res.render("admin/booking/view-booking", {
        title: "Staycation | Booking",
        user: req.session.user,
        booking
      });
    } catch (error) {
      res.redirect("/admin/booking")
    }
  },
  viewDetailBooking: async (req, res) => {
    const {id} = req.params;
    try {
      const booking = await Booking.findOne({_id:id})
      .populate('memberId')
      .populate('bankId');
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = {
        message: alertMessage,
        status: alertStatus,
    };
      res.render("admin/booking/detail-booking", {
        title: "Staycation | Detail Booking",
        user: req.session.user,
        booking,
        alert
      });
    } catch (error) {
      res.redirect('/admin/booking');
    }
  },
  actionConfirmation: async (req, res) => {
    const {id} = req.params;
    try {
      const booking = await Booking.findOne({_id:id})
      booking.payments.status = 'Accept';
      await booking.save()
      req.flash("alertMessage", "Confirmation Success");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`)
    } catch (error) {
      res.redirect(`/admin/booking/${id}`)
    }
  },
  actionReject: async (req, res) => {
    const {id} = req.params;
    try {
      const booking = await Booking.findOne({_id:id})
      booking.payments.status = 'Reject';
      await booking.save()
      req.flash("alertMessage", "Rejected Payment Success");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/booking/${id}`)
    } catch (error) {
      res.redirect(`/admin/booking/${id}`)
    }
  }
};
