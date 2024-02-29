import { Component } from '@angular/core';
import { PrincipalBannerComponent } from '../principal-banner/principal-banner.component';
import { SegundaParteComponent } from '../segunda-parte/segunda-parte.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalBannerComponent,SegundaParteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
