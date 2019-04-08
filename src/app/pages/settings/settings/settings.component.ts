import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from "src/app/pages/settings/settings/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  profileData: any;




  constructor(
    private SettingsService : SettingsService,
  ) { }

  ngOnInit() {
    this.SettingsService.profile().subscribe((res)=>{
  this.profileData = res.data;
    });
    

}
}
