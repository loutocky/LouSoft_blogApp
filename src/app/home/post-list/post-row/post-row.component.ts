import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostRowComponent {

}
