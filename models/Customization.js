import mongoose from "mongoose";

const customizationSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  color: String,
  size: String,
  material: String,
  sleeveLength: String,
  handleColor: String,
  customText: String,
  image: String, // you can store a URL or base64 string
  createdAt: { type: Date, default: Date.now },
});

const Customization = mongoose.model("Customization", customizationSchema);
export default Customization;
