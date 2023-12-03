// create token and saving that in cookies
const sendShopToken = (seller, statusCode, res) => {
  const token = seller.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // for deployment
    // sameSite: "none",
    // secure: true,
  };

  // console.log("seller_token", token);

  res.status(statusCode).cookie("seller_token", token, options).json({
    success: true,
    seller,
    token,
  });
};

module.exports = sendShopToken;
