import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-banner',
  standalone: true,
  imports: [],
  template: `
    <section class="contentbannerPrincipal">
      <img src="../../../assets/img/principal.webp" alt="" />
    </section>
  `,
  styleUrl: './principal-banner.component.scss',
})
export class PrincipalBannerComponent {}
