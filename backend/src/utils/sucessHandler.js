// SuccessHandler.js
const SuccessHandler = (res, message = "Something Sucessfully", status = 200) => {
  console.log(message)
  return res.status(status).json({
    success: true,
    message,
  });
};

export default SuccessHandler;