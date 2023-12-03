// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // for deployment
    // sameSite: "none",
    // secure: true,
  };

  // console.log("token", token);

  res.cookie("token", token, options);

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
