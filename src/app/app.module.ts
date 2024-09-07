import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
// importing necessary primeNg components
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ChartComponent } from './tickets/components/chart/chart.component';
import { CardComponent } from './tickets/components/card/card.component';
import { TableComponent } from './tickets/components/table/table.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeComponent } from 'angularx-qrcode';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [AppComponent, ChartComponent, CardComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    InputSwitchModule,
    CardModule,
    DropdownModule,
    QRCodeModule,
    InputTextModule,
    FileSaverModule,
    HttpClientModule,
    PaginatorModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
  exports: [QRCodeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
