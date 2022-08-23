import axios from "axios";
import { Course, ICourse } from "../dto/Course";


class CourseRepositry {
    constructor() {}

    async getCourses(id: string = ""){
        const path = "/courses"
        const url = id === "" ? path : `${path}/id`
        const ret = await axios.get<ICourse[]>(url, {withCredentials: true});
        return ret.data;
    }

    async createCourse(url: string, course: Course) {
        const ret = await axios.post<ICourse>(url, course);
        return ret.data;
    }

    async updateCourse(url: string, course: Course) {
        const ret = await axios.put<ICourse>(url, course);
        return ret.data;
    }
}

export default CourseRepositry;
