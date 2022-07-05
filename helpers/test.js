exports.calculateSplit = (req, res, next) => {
  const { ID, Amount, SplitInfo } = req.body

  //REQUIREMENT I: Initial Balance
  let initialBalance = Number(Amount)
  let totalRatio = 0

  // initialize empty array for each split type
  const flatSplitTypes = [];
  const percentageSplitTypes = [];
  const ratioSplitTypes = [];

  // iterate through splitinfo and update each repective split type array
  SplitInfo.forEach((info, index) => {
    switch (info.SplitType) {
      case "FLAT":
        flatSplitTypes.push({ ...info, index });
        break;
      case "PERCENTAGE":
        percentageSplitTypes.push({ ...info, index });
        break;
      case "RATIO":
        totalRatio += Number(info.SplitValue); // update total ratio split value
        ratioSplitTypes.push({ ...info, index });
        break;
      default:
        break;
    }
  });

  //REQUIREMENT II: Arrange Split Type in order of precedence recognised
  const allSplitTypes = [].concat(flatSplitTypes, percentageSplitTypes, ratioSplitTypes)

  const finalSplitBreakDown = []
  let ratioBalance

  //Split amount calculation for each object in arranged SplitInfo array
  for (let i = 0; i < allSplitTypes.length; i++) {
    const currentSplitInfo = allSplitTypes[i]
    const resObj = {}
    if (currentSplitInfo.SplitType === 'FLAT') {
      finalBalance -= Number(currentSplitInfo.SplitValue)
      resObj['SplitEntityId'] = currentSplitInfo.SplitEntityId
      resObj['Amount'] = currentSplitInfo.SplitValue
      finalSplitBreakDown[currentSplitInfo.index] = resObj
    } 
    else if (currentSplitInfo.SplitType === 'PERCENTAGE') {
      const percentageSplitAmount = (Number(currentSplitInfo.SplitValue) / 100) * finalBalance
      finalBalance -= Number(percentageSplitAmount)
      resObj['SplitEntityId'] = currentSplitInfo.SplitEntityId
      resObj['Amount'] = percentageSplitAmount
      finalSplitBreakDown[currentSplitInfo.index] = resObj
      ratioBalance = finalBalance
    } 
    else if (currentSplitInfo.SplitType === 'RATIO') {
      const openingRatioBalance = ratioBalance
      const ratioSplitAmount = (Number(currentSplitInfo.SplitValue) / totalRatio) * openingRatioBalance
      finalBalance -= Number(ratioSplitAmount)
      resObj['SplitEntityId'] = currentSplitInfo.SplitEntityId
      resObj['Amount'] = ratioSplitAmount
      finalSplitBreakDown[currentSplitInfo.index] = resObj
    }
  }

  res.status(200).json({
    message: 'Amount split completed successfully!',
    data: {
      ID,
      Balance: finalBalance,
      SplitBreakdown: finalSplitBreakDown
    }
  });
};