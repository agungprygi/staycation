const Item = require("../models/Item");
const Bank = require("../models/Bank");
const Activity = require("../models/Activity");
const Booking = require("../models/Booking");
const Category = require("../models/Category");
const Member = require("../models/Member");
const { path } = require("../app");
const cloudinary = require("../utils/cloudinary");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select("_id title country state price unit imageId")
        .limit(5)
        .populate({ path: "imageId", select: "_id imageUrl" });

      const traveler = await Activity.find();
      const treasure = await Booking.find();
      const city = await Item.find();

      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title country state isPopular imageId",
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
          perDocumentLimit: 4,
          option: {
            sort: { sumBooking: -1 },
          },
        });

      for (let i = 0; i < category.length; i++) {
        for (let j = 0; j < category[i].itemId.length; j++) {
          const item = await Item.findOne({ _id: category[i].itemId[j]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[j]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl:
          "https://res.cloudinary.com/duikqpux7/image/upload/v1724299916/f3rjnnplmlxpynsfcnyj.jpg",
        name: "Happy Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Angga",
        familyOccupation: "Product Designer",
      };

      res.status(200).json({
        hero: {
          travelers: traveler.length,
          treasures: treasure.length,
          cities: city.length,
        },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "featureId",
          select: "_id name qty imageUrl",
        })
        .populate({ path: "activityId", select: "_id name type imageUrl" })
        .populate({ path: "imageId", select: "_id imageUrl" });
      const bank = await Bank.find();
      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl:
          "https://res.cloudinary.com/duikqpux7/image/upload/v1724299916/ak0jzaaueb9aszb8qlme.jpg",
        name: "Happy Family",
        rate: 4.25,
        content:
          "What a great trip with my family and I should try again and again next time soon...",
        familyName: "Angga",
        familyOccupation: "UI Designer",
      };

      res.status(200).json({ ...item._doc, bank, testimonial });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  bookingPage: async (req, res) => {
    try {
      const {
        id,
        duration,
        bookingStartDate,
        bookingEndDate,
        firstName,
        lastName,
        email,
        phoneNumber,
        accountHolder,
        bankFrom,
      } = req.body;
      if (!req.file) {
        return res.status(404).json({ message: "Image not found" });
      }
      if (
        id === undefined ||
        duration === undefined ||
        bookingStartDate === undefined ||
        bookingEndDate === undefined ||
        firstName === undefined ||
        lastName === undefined ||
        email === undefined ||
        phoneNumber === undefined ||
        accountHolder === undefined ||
        bankFrom === undefined
      ) {
        return res.status(404).json({ message: "Complete All Fields" });
      }
      const item = await Item.findOne({ _id: id });
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      //upload file to cloudinary
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await cloudinary.uploader.upload(dataURI);
      const { secure_url } = cldRes;

      item.sumBooking += 1;
      await item.save();
      let total = item.price * duration;
      let tax = total * 0.1;

      const invoice = Math.floor(1000000 + Math.random() * 9000000);
      const member = await Member.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      const newBooking = {
        invoice,
        bookingStartDate,
        bookingEndDate,
        total: total + tax,
        itemId: {
          _id: item.id,
          title: item.title,
          price: item.price,
          duration: duration,
        },
        memberId: member.id,
        payments: {
          proofPayment: secure_url,
          bankFrom: bankFrom,
          accountHolder: accountHolder,
        },
      };
      const booking = await Booking.create(newBooking);
      res.status(201).json({ message: "Success Booking", booking });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
