import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PatchInvoiceDto } from '../dto/patchInvoice.dto';
import { PostInvoiceDto } from '../dto/postInvoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  listInvoices() {
    return this.invoiceService.listOfInvoices();
  }

  @Get(':id')
  listInvoiceById(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.listInvoiceById(id);
  }

  @Post()
  postInvoice(@Body() newInvoice: PostInvoiceDto) {
    return this.invoiceService.postInvoice(newInvoice);
  }

  @Put(':id')
  updateInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Body() postInvoice: PostInvoiceDto,
  ) {
    return this.invoiceService.updateInvoice(id, postInvoice);
  }

  @Patch(':id')
  modifyInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchInvoice: PatchInvoiceDto,
  ) {
    return this.invoiceService.modifyInvoice(id, patchInvoice);
  }

  @Delete(':id')
  deleteInvoice(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.deleteInvoice(id);
  }
}
