class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }

    async getAllCourses(req, res) {
        try {
            const courses = await this.courseService.findAll();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving courses', error: error.message });
        }
    }

    async getCourseById(req, res) {
        const { id } = req.params;
        try {
            const course = await this.courseService.findById(id);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving course', error: error.message });
        }
    }

    async createCourse(req, res) {
        try {
            const newCourse = await this.courseService.create(req.body);
            res.status(201).json(newCourse);
        } catch (error) {
            res.status(400).json({ message: 'Error creating course', error: error.message });
        }
    }

    async updateCourse(req, res) {
        const { id } = req.params;
        try {
            const updatedCourse = await this.courseService.update(id, req.body);
            if (!updatedCourse) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(updatedCourse);
        } catch (error) {
            res.status(400).json({ message: 'Error updating course', error: error.message });
        }
    }

    async deleteCourse(req, res) {
        const { id } = req.params;
        try {
            await this.courseService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting course', error: error.message });
        }
    }
}

module.exports = CourseController;