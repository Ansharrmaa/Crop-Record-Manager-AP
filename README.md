A lightweight RESTful API developed using Node.js, Express.js, and MongoDB (with Mongoose) for managing crop records.

Supported operations:
✅ Add new crop record
✅ Retrieve all crop records
✅ Remove a crop by its ID

🚀 Features

Create a crop record: POST /api/crops

Retrieve all crop records: GET /api/crops

Delete a crop record by ID: DELETE /api/crops/:id

Each crop entry includes:

type – type of crop (e.g., Wheat, Rice)

yield – yield amount in units

harvestDate – date the crop was harvested

🧰 Tech Stack

Node.js

Express.js

MongoDB (with Mongoose)

dotenv for environment configuration

Postman for API testing
