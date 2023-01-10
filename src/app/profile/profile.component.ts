import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent} from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // session: SessionState;
  user: User;
  // favorites$ = this.facade.favoriteMaterials$;
  companyFormGroup = new FormGroup({});
  passwordFormControl = new FormControl( {value: '●●●●●●●●●●●●', disabled: true});
  loadingPicture = false;

  coverFileResult: string | ArrayBuffer;
  profileFormGroup: FormGroup<{ email: FormControl<string | null>; phoneNumber: FormControl<string | null>; id: FormControl<number | null>; }>;

  constructor(
    // private facade: ReferentielsFacade,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private userService: UserService,
    
  ) { 
    this.filteredSports = this.sportCtrl.valueChanges.pipe(
      startWith(null),
      map((sport: string | null) => (sport ? this._filter(sport) : this.allsports.slice())),
    );
}

  ngOnInit(): void {
    this.profileFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10)]),
      id: new FormControl(0)
    });
    this.user = this.userService.getUserById(0);
    this.setControls();
  }
  
  separatorKeysCodes: number[] = [ENTER, COMMA];
  sportCtrl = new FormControl();
  filteredSports: Observable<string[]>;
  sports: string[] = ['Futsal'];
  allsports: string[] = ['Futsal', 'Basket', 'Volley'];

  @ViewChild('sportInput') sportInput: ElementRef<HTMLInputElement>;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our sport
    if (value) {
      this.sports.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.sportCtrl.setValue(null);
  }

  remove(sport: string): void {
    const index = this.sports.indexOf(sport);

    if (index >= 0) {
      this.sports.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.sports.push(event.option.viewValue);
    this.sportInput.nativeElement.value = '';
    this.sportCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allsports.filter(sport => sport.toLowerCase().includes(filterValue));
  }

  setControls() {
    this.profileFormGroup.patchValue({
      id: this.user.id,
      email: this.user.email,
    })
  }

  onSendResetEmail() {
    // this.facade.onForgottenPassword(this.user.email).subscribe(
    //   success => {
    //     this.snackbar.open('Consultez votre boite mail', 'Fermer', {panelClass: 'success-snack-bar', duration: 3000, verticalPosition: 'top'});
    //   }, error => {
    //     console.log('error reset email : ', error);
    //     this.snackbar.open('Erreur lors de l\'envoi de l\'email de réinitialisation', 'Fermer', {panelClass: 'error-snack-bar', duration: 3000, verticalPosition: 'top'});
    //   }
    // )
  }

}
