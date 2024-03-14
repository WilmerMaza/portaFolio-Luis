import { Component } from '@angular/core';
import { PrincipalBannerComponent } from '../principal-banner/principal-banner.component';
import { SegundaParteComponent } from '../segunda-parte/segunda-parte.component';
import { TerceraParteComponent } from '../tercera-parte/tercera-parte.component';
import { CuartaParteComponent } from '../cuarta-parte/cuarta-parte.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalBannerComponent,SegundaParteComponent, TerceraParteComponent, CuartaParteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
