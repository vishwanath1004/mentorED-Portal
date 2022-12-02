import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'


@Component({
  selector: 'app-session-listing',
  templateUrl: './session-listing.component.html',
  styleUrls: ['./session-listing.component.scss']
})
export class SessionListingComponent implements OnInit {
  cardHeading: any;
  cardDetails: any;
  mySessions: any;
  allSessions: any;
  start: any = 0;
  lastIndex: any = 4;
  selectedPage: any;
  page: any = 1;
  limit: any = 4;
  noData: any;
  loading: boolean = false;
  constructor(private router: Router, private apiService: ApiService) {
    this.selectedPage = router.url

  }

  ngOnInit(): void {
    
    this.cardHeading = (this.selectedPage == '/enrolled-sessions') ? "MY_SESSIONS" : "ALL_SESSIONS";
    this.getAllSession();
  }

  onClickViewMore() {
    this.lastIndex = this.cardDetails.length
  }
  getAllSession() {
    let config = {
      url: API_CONSTANTS.HOME_SESSION + this?.page + '&limit=' + this?.limit
    };
    this.loading = true;
    this.apiService.get(config).subscribe((data: any) => {
      this.loading = false;
      this.cardDetails = (this.selectedPage == '/enrolled-sessions') ? data.result.mySessions : data.result.allSessions;
      if (!this.cardDetails.length) {
        this.noData = (this.selectedPage == '/enrolled-sessions') ? { "content": "Enroll for live session hosted by verified education leaders!" } : "";
      }
    }, error => {
      this.loading = false;
    })

  }

}