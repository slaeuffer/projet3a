import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import {AgmInfoWindow, AgmMap, MapsAPILoader} from '@agm/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AskGeolocationModalComponent } from '../components/ask-geolocation-modal/ask-geolocation-modal.component';

export interface Marker {
  lat: number;
  lng: number;
  elementNb: string;
  img: string;
  type: string;
  element: any;
  draggable: boolean;
  isClicked: boolean;
}

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {

    companies: Company[];


    private overlayRef?: OverlayRef;
    @ViewChild('contactBtn', {static: false}) contactBtn: any;
    // @ViewChild('map') map: google.maps.Map;
    @ViewChild('map') map: AgmMap;
    @ViewChild('infowindow') infowindow: google.maps.InfoWindow;
    foundSearches$ = new Observable<any[]>();
    searchResults$ = new Observable<any[]>(undefined);
    searchResults: any[];
    searchResultsNb = 0;
    lat = 48.876959;
    lng = 2.329984;
    myLocation: {
      longitude: number,
      latitude: number
    };
    myCompany: Company;
    isMapDisplaying = true;
    displayMyPin = false;
    filtersType: Observable<any>;


    constructor(
        private companyService: CompanyService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private overlay: Overlay,
        private mapsApiLoader: MapsAPILoader,
    ) {
      if (navigator.geolocation) {
        this.mapsApiLoader.load().then(() => {
          navigator.geolocation.getCurrentPosition((position) => {
            this.myLocation = {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            };
            this.lat = this.myLocation.latitude;
            sessionStorage.setItem('defaultLatitude', this.myLocation.latitude.toString());
            this.lng = this.myLocation.longitude;
            sessionStorage.setItem('defaultLongitute', this.myLocation.longitude.toString());
          }, error => {
            if (sessionStorage.getItem('defaultLatitude') && sessionStorage.getItem('defaultLongitute')) {
              this.myLocation = {
                longitude: parseFloat(sessionStorage.getItem('defaultLongitute') ?? ''),
                latitude: parseFloat(sessionStorage.getItem('defaultLatitude') ?? '')
              };
              this.lat = parseFloat(sessionStorage.getItem('defaultLatitude')?? '');
              this.lng = parseFloat(sessionStorage.getItem('defaultLongitute')?? '');
            } else {
              this.onAskGeolocation();
            }
          });
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
     }
  
  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe(
      (data) => this.companies = data
    )
  }
  
  onMouseOver(infoWindow: AgmInfoWindow, gm: any) {
    if (gm.lastOpen && gm.lastOpen.isOpen) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  onMouseLeave(gm: any) {
    gm.lastOpen.close();
  }

  onAskGeolocation() {
    const dialogRef = this.dialog.open(AskGeolocationModalComponent, {
      width: '40%',
      height: '35%',
      autoFocus: false,
      disableClose: true,
    });
    dialogRef.componentInstance.positionEmitter.subscribe((position: any) => {
      if (position) {
        this.myLocation = {
          longitude: position.lng(),
          latitude: position.lat()
        };
        this.lat = this.myLocation.latitude;
        sessionStorage.setItem('defaultLatitude', this.myLocation.latitude.toString());
        this.lng = this.myLocation.longitude;
        sessionStorage.setItem('defaultLongitute', this.myLocation.longitude.toString());
        dialogRef.close();
      }
    })
  }

}
