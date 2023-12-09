import express from 'express';
import { AcademicSemeterRoutes } from '../modules/academicSemester/AcademicSemester.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/academic-semesters',
        route: AcademicSemeterRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
