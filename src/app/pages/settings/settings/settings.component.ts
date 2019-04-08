import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from "src/app/pages/settings/settings/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  fullName: string = "Rahul";
    
    public profileData: any[] = [
  {
     userId : "sowmya.ks.65@gmail.com",
     loginPass : "123456ks",
     name: "sowmyashree",
     phoneNumber: "9148498642"
  }
]


  constructor(
    private SettingsService : SettingsService,
  ) { }

  ngOnInit() {
    this.SettingsService.profile().subscribe((res)=>{
  this.profileData = res.data;
    });
    

}
}
