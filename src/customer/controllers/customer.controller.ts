import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { PatchCustomerDto } from 'src/customer/dto/patchCustomer.dto';
import { PostCustomerDto } from 'src/customer/dto/postCustomer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  listCustomers() {
    return this.customerService.listOfCustomers();
  }

  @Get(':rut')
  listCustomerByRut(@Param('rut', ParseIntPipe) rut: number) {
    return this.customerService.listCustomerByRut(rut);
  }

  @Post()
  postCustomer(@Body() newCustomer: PostCustomerDto) {
    return this.customerService.postCustomer(newCustomer);
  }

  @Put(':rut')
  updateCustomer(
    @Param('rut', ParseIntPipe) rut: number,
    @Body() postCustomer: PostCustomerDto,
  ) {
    return this.customerService.updateCustomer(rut, postCustomer);
  }

  @Patch(':rut')
  modifyCustomer(
    @Param('rut', ParseIntPipe) rut: number,
    @Body() patchCustomer: PatchCustomerDto,
  ) {
    return this.customerService.modifyCustomer(rut, patchCustomer);
  }

  @Delete(':rut')
  deleteCustomer(@Param('rut', ParseIntPipe) rut: number) {
    return this.customerService.deleteCustomer(rut);
  }
}
