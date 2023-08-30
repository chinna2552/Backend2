const Customer = require('../Models/Customer');

module.exports.createCustomer = async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    const customer = new Customer({ name, email, phoneNumber, address });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: 'Error creating customer' });
  }
};

module.exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers' });
  }
};

module.exports.getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports.updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true });

    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: 'Error updating customer' });
  }
};

module.exports.deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting customer' });
  }
};