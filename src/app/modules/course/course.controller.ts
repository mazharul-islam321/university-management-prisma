import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
// import pick from "../../../shared/pick";
import sendResponse from '../../../shared/sendResponse';
// import { courseFilterableFields } from "./course.constants";
import { CourseService } from './course.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await CourseService.insertIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course created successufully',
        data: result,
    });
});

export const CourseController = {
    insertIntoDB,
    // getAllFromDB,
    // getByIdFromDB,
    // deleteByIdFromDB,
    // updateOneInDB,
    // assignFaculies,
    // removeFaculties
};
