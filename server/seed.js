const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Category = require('./models/Category');
const Bank = require('./models/Bank');
const Item = require('./models/Item');
const Feature = require('./models/Feature');
const Activity = require('./models/Activity');
const Member = require('./models/Member');
const Image = require('./models/Image');
const Booking = require('./models/Booking');
const Users = require('./models/Users');

async function seedDatabase() {
    try {
      // Connect to MongoDB
      console.log('Connecting to MongoDB...');
      await mongoose.connect('mongodb+srv://123200085:ECsus21LvDF6nRPP@staycation.fazzf.mongodb.net/?retryWrites=true&w=majority&appName=staycation', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB.');
  
      // Define your data
      const categoryData = [
        {
            _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
            name: 'Houses with beauty backyard',
            itemId: [
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902225') }
            ]
          },
          {
            _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
            name: 'Hotels with large living room',
            itemId: [
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902229') }
            ]
          },
          {
            _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
            name: 'Apartment with kitchen',
            itemId: [
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
              { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902233') }
            ]
          }
      ];
  
      const bankData = [
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
          bankName: 'Mandiri',
          accountNumber: '089898',
          name: 'elfin',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299916/lztqxjvufx8mf4y0moa2.png'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
          bankName: 'BCA',
          accountNumber: '878678',
          name: 'elfin',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299916/jf9ioutlpd9m5ry3z3sd.png'
        }
      ];
      const itemData = [
        // Tabby Town
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Tabby Town',
          price: 12,
          sumBooking: 1,
          country: 'ID',
          state: 'Lampung',
          city: 'Metro',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08') }
          ],
          categoryId: '5e96cbe292b97300fc901111'
        },
        // Seattle Rain
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
          title: 'Seattle Rain',
          price: 20,
          sumBooking: 2,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung City',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901111'
        },
  
        // Wodden Pit
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
          title: 'Wodden Pit',
          price: 20,
          sumBooking: 3,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901111'
        },
  
        // Anggana
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
          title: 'Anggana',
          price: 20,
          sumBooking: 4,
          country: 'ID',
          state : 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901111'
        },
  
        // Green Park
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
          title: 'Green Park',
          price: 20,
          sumBooking: 5,
          country: 'ID',
          state : 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901112'
        },
  
        // Podo Wae
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
          title: 'Podo Wae',
          price: 20,
          sumBooking: 6,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901112'
        },
  
        // Silver Rain
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
          title: 'Silver Rain',
          price: 20,
          sumBooking: 7,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901112'
        },
  
        // Cashville
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
          title: 'Cashville',
          price: 20,
          sumBooking: 8,
          country: 'ID',
          state :'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901112'
        },
  
        // PS Wood
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
          title: 'PS Wood',
          price: 20,
          sumBooking: 9,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901113'
        },
  
        // One Five
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
          title: 'One Five',
          price: 20,
          sumBooking: 11,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901113'
        },
  
        // Minimal
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
          title: 'Minimal',
          price: 20,
          sumBooking: 13,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33') }
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901113'
        },
  
        // Stays Home
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
          title: 'Stays Home',
          price: 20,
          sumBooking: 14,
          country: 'ID',
          state: 'West Java',
          city: 'Bandung',
          isPopular: false,
          description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
          unit: 'night',
          imageId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35') },
            // done
          ],
          featureId: [
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
            // done
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
          ],
          activityId: [
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
            { _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
          ],
          categoryId: '5e96cbe292b97300fc901113'
        },
  
      ];
      const featureData = [
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
          name: 'bedroom',
          qty: 2,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/br0pzwsxxgn9rabr2dbj.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
          name: 'living room',
          qty: 23,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/zamqeidcaids33eyhfpd.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
          name: 'televison',
          qty: 12,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/bxs1ispoklzsynq7gvso.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
          name: 'televison',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/oq9zs8nzdbgfoxgw0n01.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
          name: 'mbp/s',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/kynabrwhxwpv5lidsyxj.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
          name: 'unit ready',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/xylexr2q8xepnshsjxam.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
          name: 'refigrator',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/iemf0wtgl219xl4byj04.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
          name: 'televion',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/ecruh7sjpsbzspnpwckh.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        // item 2
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
          name: 'bedroom',
          qty: 2,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/br0pzwsxxgn9rabr2dbj.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
          name: 'living room',
          qty: 23,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/zamqeidcaids33eyhfpd.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
          name: 'televison',
          qty: 12,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/bxs1ispoklzsynq7gvso.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
          name: 'televison',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/oq9zs8nzdbgfoxgw0n01.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
          name: 'mbp/s',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/kynabrwhxwpv5lidsyxj.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
          name: 'unit ready',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299924/xylexr2q8xepnshsjxam.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
          name: 'refigrator',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/iemf0wtgl219xl4byj04.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
          name: 'televion',
          qty: 5,
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/ecruh7sjpsbzspnpwckh.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        }
      ];
      const activityData = [
        // done
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
          name: 'Green Lake',
          type: 'Nature',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299927/nhn0o4swiid0gvhnd9zt.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
          name: 'Dog Clubs',
          type: 'Pool',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299927/ychlhminxr8wotr1ywxt.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
          name: 'Labour and Wait',
          type: 'Shopping',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299926/zuc3os98tl9l1ngblpxm.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
          name: 'Labour and Wait',
          type: 'Shopping',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299926/zo1z06rtcwzi13nhg0ej.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        },
        // done 2
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
          name: 'Green Lake',
          type: 'Nature',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299926/zuc3os98tl9l1ngblpxm.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
          name: 'Dog Clubs',
          type: 'Pool',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299927/ychlhminxr8wotr1ywxt.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
          name: 'Labour and Wait',
          type: 'Shopping',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299927/nhn0o4swiid0gvhnd9zt.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
          name: 'Labour and Wait',
          type: 'Shopping',
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299926/zo1z06rtcwzi13nhg0ej.png',
          itemId: new mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        }
      ];
      const memberData = [
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
          firstName: 'Elfin',
          lastName: 'Sanjaya',
          email: 'elfinsanjaya12@gmail.com',
          phoneNumber: '082377954018'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
          firstName: 'Yein',
          lastName: 'Narayana',
          email: 'elfinsanjaya1207@gmail.com',
          phoneNumber: '082377954018'
        }
      ];
      const imageData = [
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/lmfhl0vqexmhrcsv6vkk.jpg'
        },
        // done
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/brcnqbjzuxmhb83qlk6n.jpg'
        },
        // done
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/leqrq5heuilw3chocfpt.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299920/bnmsh9svisb85pguojno.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299920/ovqeq8crjijqiit8zzjg.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299920/gsdaiwnn7svecpdmmbtd.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299920/uvmtbf4lumghyzrrfbod.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299920/agb1iu1jgj4glwgr4edb.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299919/ni5fryufdsbxhizr9029.jpg'
        },
        {
          // done
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299919/lccda4bylazxqjjanb7v.jpg'
        },
        // done
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299919/hafvazfsow9qpf6j3gfh.jpg'
        },
        // done
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299919/zwkqwurypncgtvwgoxae.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299919/qs8g6wils7ehzmuuh6k5.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299918/ne4zzumyj6pcdvwqjzuq.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299918/ic8j2db240imn647qpx9.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/c6qqvutxzbu5caugwqex.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/yfqjsz5pjk1ph0eggx9s.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/swz9bvkqztijhftlvocm.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/g4kqfxrz5fwfve3mnahx.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/qtgthurnadtyoiidaomi.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299923/c99xvwfeblsdhshyzk05.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/cqmx2kudqmmfpxhodpix.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/aybouuplqrd7bfw38bfl.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/bcixqehtmwcrthmw63uq.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/cqmx2kudqmmfpxhodpix.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/aybouuplqrd7bfw38bfl.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/bcixqehtmwcrthmw63uq.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/hihmxxrjbcgn9o7gjult.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/dx62thpgh5hftx0hfuo9.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/dv1hfrvov28rfsvuxsi4.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299922/wbayko6oxjusx84psjko.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/fj8pfoo589zdhg7o6y2c.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/ebzydkcv8tjguqsllvsx.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/co3icilazz5gzbiajdr6.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/fj8pfoo589zdhg7o6y2c.jpg'
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
          imageUrl: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299921/ebzydkcv8tjguqsllvsx.jpg'
        },
      ];
      const bookingData = [
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
          bookingStartDate: '12-12-2020',
          bookingEndDate: '12-12-2020',
          invoice: 1231231,
          itemId: {
            _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
            title: 'Village Angga',
            price: 6,
            duration: 2,
          },
          total: 12,
          memberId: new mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
          bankId: new mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
          payments: {
            proofPayment: 'https://res.cloudinary.com/duikqpux7/image/upload/v1724299925/exutjbngjswmvtkgfhix.jpg',
            bankFrom: 'BCA',
            status: 'Proses',
            accountHolder: 'ang'
          }
        }
      ];
      const usersData = [
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
          username: 'admin',
          password: await bcrypt.hash('rahasia', 8),
        },
        {
          _id: new mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
          username: 'superadmin',
          password: await bcrypt.hash('rahasia', 8),
        },
      ];
  
      // Load all models
      const models = [
        { model: Category, data: categoryData },
        { model: Bank, data: bankData },
        { model: Item, data: itemData },
        { model: Feature, data: featureData },
        { model: Activity, data: activityData },
        { model: Member, data: memberData },
        { model: Image, data: imageData },
        { model: Booking, data: bookingData },
        { model: Users, data: usersData },
      ];
  
      // Clear and seed each model
      for (const { model, data } of models) {
        
        console.log(`Clearing ${model.modelName} data...`);
        await model.deleteMany({});
        console.log(`${model.modelName} data cleared.`);
  
        console.log(`Seeding ${model.modelName} data...`);
        await model.insertMany(data);
        console.log(`${model.modelName} data seeded successfully.`);
      }
  
    } catch (err) {
      console.error('An error occurred during seeding:', err);
    } finally {
      // Disconnect from MongoDB
      console.log('Disconnecting from MongoDB...');
      mongoose.disconnect();
      console.log('Disconnected from MongoDB.');
    }
  }

seedDatabase();