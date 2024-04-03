const model = require('../model/model');

module.exports = {

  register: function(req, res) {
    const { id, fullName, address, status } = req.body;

    const fee = model.calculateFee(status);

    res.json({
      id: id,
      fullName: fullName,
      address: address,
      status: status,
      fee: fee
    });
  }
};
