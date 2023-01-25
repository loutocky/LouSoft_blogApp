import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  constructor() {

  }

  navigate(): void {
    window.open('https://github.com/loutocky', '_blank');
  }
}
