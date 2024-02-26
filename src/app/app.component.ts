import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcaComponent } from '../../projects/ica/src/lib/ica.component';
import { IcaSpinnerComponent } from '../../projects/ica/src/lib/ica-spinner/ica-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IcaComponent, IcaSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-library';
}
