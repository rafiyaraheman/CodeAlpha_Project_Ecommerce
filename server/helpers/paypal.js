const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZ0e7x3OcYBf4hhUD_A1C518WjWgFv9prhAvog_yENoO518ciyM96HW8NClDKOQwnvnOBryZZHyDsfdW",
  client_secret: "EPxJRivWUnGCA87TMpRaz8zWNCZM6gdtR9MNBMI961qdJ00np7Ys6K7Hsyp1EZu8ec2K3D6KvLEGNLur",
});

module.exports = paypal;