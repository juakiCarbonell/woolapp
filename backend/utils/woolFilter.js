const queryGenertor = (req) => {
  let query = {};
  const field = req.query.field;
  const order = req.query.order;
  const thicknessParam = req.query.thickness;
  const leftParam = req.query.left;
  console.log("re1", leftParam);
  // const sort = {};
  // sort[field] = order;
  // let wools;
  // if (field.length === 0 && order.length === 0) {
  //   wools = await Wool.find({});
  // } else {
  //   wools = await Wool.find({}).sort(sort);
  // }
  if (thicknessParam && !leftParam) {
    return { thickness: thicknessParam };
  } else if (!thicknessParam && leftParam) {
    switch (leftParam) {
      case "1":
        return { left: { $lt: 50 } };
      case "2":
        return { left: { $gte: 50, $lt: 100 } };
      case "3":
        return { left: { $gte: 100, $lt: 150 } };
      case "4":
        return { left: { $gte: 150, $lt: 200 } };
      case "5":
        return { left: { $gte: 200, $lt: 300 } };
      case "6":
        return { left: { $gte: 300, $lt: 500 } };
      case "7":
        return { left: { $gte: 500 } };
      default:
        return {};
    }
  } else {
    return {};
  }
};

export default queryGenertor;
