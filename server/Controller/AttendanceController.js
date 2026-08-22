const Management = require("../Model/Management");

const getEmployees = async (req, res) => {
  
  try {
    const employees = await Management.find().select("_id fullName role");

    res.status(200).json({
      success: true,
      data: employees,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getEmployees };