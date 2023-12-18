import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/:id', FacultyController.getByIdFromDB);

router.post(
    '/create-faculty',
    validateRequest(FacultyValidation.create),
    FacultyController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(FacultyValidation.update),
    // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    FacultyController.updateOneInDB
);

router.delete(
    '/:id',
    // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    FacultyController.deleteByIdFromDB
);

export const facultyRoutes = router;
