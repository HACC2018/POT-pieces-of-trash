import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TrashPieComponent } from './pie-chart/trash-pie.component';
import { TrashLineComponent } from './line-chart/trash-line.component';
import {LineChartComponent} from './line-chart/line-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    PieChartComponent,
    TrashPieComponent,
    TrashLineComponent,
    LineChartComponent,
    TrashLineComponent,
  ],
})
export class DashboardModule { }
