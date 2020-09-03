import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../Services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productLists = [];
  filetredData = [];
  launchYears = [];
  loadData = false;
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.getTheData();
  }

  manageActions(url) {
    if(url) {
      this.getFilteredData(url);
    }
  }

  getTheData() {
    this.loadData = false;
    this.dataService.httpCall('GET', 'launches?limit=100').subscribe((data: any) => {
      this.productLists = data;
      this.productLists.forEach(item => {
        if (!this.launchYears.includes(item.launch_year)) {
          this.launchYears.push(item.launch_year);
        }
      });
      this.loadData = true;
    }, (error: any) => {
      this.loadData = true;
      console.log(error);
    });
  }

  getFilteredData(url) {
    this.loadData = false;
    this.dataService.httpCall('GET', url).subscribe((data: any) => {
      this.productLists = data;
      this.loadData = true;
    }, (error: any) => {
      console.log(error);
      this.loadData = true;
    });
  }
}
