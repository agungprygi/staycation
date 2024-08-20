const Category = require("../models/Category");
const Bank = require("../models/Bank");
const Item = require("../models/Item");
const Image = require("../models/Image");
const Feature = require("../models/Feature");
const cloudinary = require("../utils/cloudinary");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view-dashboard", {
      title: "Staycation | Dashboard",
    });
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

    try {
      res.render("admin/item/detail_item/view_detail_item", {
        title: "Staycation | Detail Item",
        alert,
        itemId,
        feature
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
  viewBooking: (req, res) => {
    res.render("admin/booking/view-booking", {
      title: "Staycation | Booking",
    });
  },
};
