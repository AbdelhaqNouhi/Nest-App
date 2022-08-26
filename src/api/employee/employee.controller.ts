import { Controller, Body, Get,Post, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';



@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    // @UseGuards()
    // @Get()


    // @Post()
}
