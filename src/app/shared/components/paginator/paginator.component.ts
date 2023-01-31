import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Output()
  left: EventEmitter<void>;

  @Output()
  right: EventEmitter<void>;

  constructor() {
    this.left = new EventEmitter();
    this.right = new EventEmitter();
  }

  moveLeft(): void {
    this.left.emit();
  }

  moveRight(): void {
    this.right.emit();
  }
}
