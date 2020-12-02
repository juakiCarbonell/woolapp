const queryGenertor = (req) => {
  const thicknessParam = req.query.thickness;
  const leftParam = req.query.left;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  if (thicknessParam && !leftParam) {
    return { thickness: thicknessParam, ...keyword };
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
  } else if (thicknessParam && leftParam) {
    switch (leftParam) {
      case "1":
        return { left: { $lt: 50 }, thickness: thicknessParam };
      case "2":
        return {
          left: { $gte: 50, $lt: 100 },
          thickness: thicknessParam,
        };
      case "3":
        return {
          left: { $gte: 100, $lt: 150 },
          thickness: thicknessParam,
        };
      case "4":
        return {
          left: { $gte: 150, $lt: 200 },
          thickness: thicknessParam,
        };
      case "5":
        return {
          left: { $gte: 200, $lt: 300 },
          thickness: thicknessParam,
        };
      case "6":
        return {
          left: { $gte: 300, $lt: 500 },
          thickness: thicknessParam,
        };
      case "7":
        return {
          left: { $gte: 500 },
          thickness: thicknessParam,
        };
      default:
        return { ...keyword };
    }
  } else {
    return { ...keyword };
  }
};

export default queryGenertor;
