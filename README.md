🌾 Crop Record Manager API
A simple RESTful API built with Node.js, Express.js, and MongoDB (via Mongoose) to manage crop records.
Supports:
✅ Create new crop
✅ View all crops
✅ Delete a crop by ID

🚀 Features
Add a new crop record (POST /api/crops)

View all crop records (GET /api/crops)

Delete a crop record by ID (DELETE /api/crops/:id)

Each crop record has:

type → type of crop (e.g., Wheat, Rice)

yield → yield in units

harvestDate → date of harvest

🧰 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

dotenv for managing environment variables

Postman for testing