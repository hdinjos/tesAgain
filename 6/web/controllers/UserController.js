const db = require('../config/database')

class UserController {
    static index(req, res) {
        // logic here
        const query = `
            SELECT users.user_id, users.full_name, users.date_of_birth, users.phone_number, users.last_education, users.relegion, cities.id,cities.name, users.full_name, hobbies.hobby_name
            FROM users
            INNER JOIN cities
            ON users.place_of_birth=cities.id 
            INNER JOIN users_hobbies
            ON users.user_id = users_hobbies.biodata_id
            INNER JOIN hobbies
            ON users_hobbies.hobby_id = hobbies.hobby_id
        `
        db.query(query, (err, rows, fields) => {
            if (err) {
                throw err
            }

            console.log(rows)

            return res.render('index', {
                users : rows
            })
        })
    }
 
}




module.exports = UserController