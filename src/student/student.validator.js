
class StudentValiator {

    async addStudent(req, res, next) {
        let { name, schoolId, rollNo } = req.body;
        if (!name) {
            return res.status(400).send({ message: "Name is required." })
        }
        if (!schoolId) {
            return res.status(400).send({ message: "School is required." })
        }
        if (!req.body.class) {
            return res.status(400).send({ message: "Class is required." })
        }
        if (!rollNo) {
            return res.status(400).send({ message: "Roll No. is required." })
        }
        next();
    }
}

module.exports = new StudentValiator();