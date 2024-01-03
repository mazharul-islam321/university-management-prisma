import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.route';
import { buildingRoutes } from '../modules/building/building.route';
import { courseRoutes } from '../modules/course/course.route';
import { facultyRoutes } from '../modules/faculty/faculty.route';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { roomRoutes } from '../modules/room/room.route';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { studentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/academic-semesters',
        route: AcademicSemeterRoutes,
    },
    {
        path: '/academic-faculties',
        route: academicFacultyRoutes,
    },
    {
        path: '/academic-departments',
        route: academicDepartmentRoutes,
    },
    {
        path: '/students',
        route: studentRoutes,
    },
    {
        path: '/faculties',
        route: facultyRoutes,
    },
    {
        path: '/buildings',
        route: buildingRoutes,
    },
    {
        path: '/rooms',
        route: roomRoutes,
    },
    {
        path: '/courses',
        route: courseRoutes,
    },
    {
        path: '/semesters-registration',
        route: semesterRegistrationRoutes,
    },
    {
        path: '/offered-courses',
        route: offeredCourseRoutes,
    },
    {
        path: '/offered-course-sections',
        route: offeredCourseSectionRoutes,
    },
    {
        path: '/offered-course-class-schedules',
        route: offeredCourseClassScheduleRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
