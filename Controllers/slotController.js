const slotModel = require("../Model/Slot");
const { catchAsync } = require("../utils/catchAsync");

exports.addSlot = catchAsync(async (req, res) => {
  const newSlot = await slotModel.create(req.body);
  res.status(200).json({
    status: "sucess",
    data: newSlot,
  });
});
exports.deleteSlot = catchAsync(async (req, res) => {
  await slotModel.findByIdAndRemove(req.params.id);
  res.status(204).json({});
});
