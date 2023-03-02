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
        console.log("nav autorisé")
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
            console.log("rea")
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
    this.activatedRoute.fragment.subscribe((ok: any) => {
      this.mapsApiLoader.load().then(() => {
        if (ok) {
          this.onSeeMyCompany();
        } else {
          this.launchSearch(true);
        }
      });
    })
  }

  launchSearch(displayMap: boolean) {
    this.isMapDisplaying = displayMap;
    this.displayMyPin = false;
    console.log("launchSearch")
    // this.foundSearches$ = this.searchResults$.pipe(
    //   map(searches => searches && searches.length > 0 ?
    //     searches.map(search => {
    //       const searchId = search.company ? (search.company.id ? search.company.id : search.company._id) : (search.referent.company.id ? search.referent.company.id : search.referent.company._id);
    //       return ({
    //         lat: search.company ? search.company.address.location[1] : search.referent.company.address.location[1],
    //         lng: search.company ? search.company.address.location[0] : search.referent.company.address.location[0],
    //         elementNb: searches.filter(filterSearch => (filterSearch.company ? filterSearch.company._id : filterSearch.referent.company._id) === searchId).length,
    //         img: search.company ? search.company.picture : search.photos[0],
    //         type: search.company ? ProjectFiltersNeedType.SKILLS : ProjectFiltersNeedType.MATERIALS,
    //         element: search.company ? searches.filter(skill => skill.company._id === searchId) : search,
    //         draggable: false,
    //         isClicked: true,
    //       });
    //     }) : []),
    //   // No filter because duplicates will only stack on top of each others
    // );
  }

  onSeeMyCompany() {
    this.displayMyPin = true;
    this.lat = 48.876959;
    this.lng = 2.329984;
    // const modal = this.dialog.open(CompanyModalComponent, {
    //   width: '30%',
    //   height: '100vh',
    //   position: {right: '0', bottom: '0'},
    //   autoFocus: false,
    //   disableClose: false,
    //   hasBackdrop: true,
    //   panelClass: 'search-modal',
    // });
    // modal.afterClosed().subscribe((redirect) =>
    // {
    //   if (redirect) {
    //     this.router.navigateByUrl('/');
    //   }
    // });
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
