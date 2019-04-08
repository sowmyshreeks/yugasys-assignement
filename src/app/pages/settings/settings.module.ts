import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { SettingsService } from "src/app/pages/settings/settings/settings.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  declarations: [SettingsComponent,],
  providers : [SettingsService]
  
})
export class SettingsModule { }
