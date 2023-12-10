import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.route';
import { facultyRoutes } from '../modules/faculty/faculty.route';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
