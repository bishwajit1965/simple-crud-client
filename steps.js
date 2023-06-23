/**
 * ================================
 * MONGO CONNECTION
 * ================================
 * 1. create account
 * 2. Create a user with password
 * 3. White list IP address
 * 4. Database > connect > driver > Node > view full code
 * 5. Change the password the uri
 *
 *================================
 * 1. CREATE -- POST
 * 2. app.post("/users", async (req, res) =>{})
 * 3. make the function async to use await inside it
 * 4. Make sure to use express.json() middleware
 * 5. Access data from the body: const user = req.body;
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result);
 *
 *
 *
 */
