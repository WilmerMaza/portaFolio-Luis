import { Component } from '@angular/core';
import { SegundaParteComponent } from './segunda-parte/segunda-parte.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SegundaParteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
