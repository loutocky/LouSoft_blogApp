import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlogPost } from 'api';
import { NGXLogger } from 'ngx-logger';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostRowComponent implements OnChanges {
  @Input()
  post: BlogPost;

  private _missingImage: boolean = false;
  get missingImage(): boolean {
    return this._missingImage;
  }

  tagsStr: string[] = [];

  constructor(
    private sharedService: SharedService,
    private logger: NGXLogger,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.debug('Changes ', changes);

    if (changes['post']?.currentValue) {
      this.tagsStr = this.sharedService.getTags(this.post.tags);
    }
  }

  error($event: Event): void {
    this.logger.debug('Event ', $event);

    if ($event.type === 'error') {
      this._missingImage = true;
    }
  }
}
