module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view-dashboard');
    },
    viewCategory: (req, res) => {
        res.render('admin/category/view-category');
    },
    viewBank: (req, res) => {
        res.render('admin/bank/view-bank');
    },
    viewItem: (req, res) => {
        res.render('admin/item/view-item');
    },
    viewBooking: (req, res) => {
        res.render('admin/booking/view-booking');
    }
}