import Hotel from "../models/hotel.js";



//get all hotels
export const getAll = async (req, res, next) => {
  try {
    const allHotel = await Hotel.find();
    res.send(allHotel);
  } catch (err) {
    next(err);
  }
}


//get hotel by id
export const getById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.send(hotel);
  } catch (err) {
    next(err)
  }
}



//create a new hotel
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
    next()
  } catch (err) {
    next(err)
  }
}



//update a hotel
export const updateHotel = async (req, res, next) => {
  try {

    const savedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    res.status(200).json(savedHotel)
  } catch (err) {
    next(err)
  }
}


