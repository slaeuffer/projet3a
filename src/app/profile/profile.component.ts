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
export interface Fruit {
  name: string;
}
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
    // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    // );
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
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruitCtrl = new FormControl('');
  // filteredFruits: Observable<string[]>;
  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  // @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.fruits.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();

  //   this.fruitCtrl.setValue(null);
  // }

  // remove(fruit: string): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }

  // selected(event: { option: { viewValue: string; }; }): void {
  //   this.fruits.push(event.option.viewValue);
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  // }

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
