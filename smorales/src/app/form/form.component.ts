import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userData = {
    name: '',
    lastname: '',
    email: '',
  };

  onSubmit() {
    console.log(this.userData);
  }
}
