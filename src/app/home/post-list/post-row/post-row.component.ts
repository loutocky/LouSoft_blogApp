import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BlogPost, Tag } from 'api';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostRowComponent implements OnChanges {
  @Input()
  post: BlogPost;

  @Input()
  tags: Tag[];

  private _missingImage: boolean = false;
  get missingImage(): boolean {
    return this._missingImage;
  }

  private _tagsStr: string[] = [];
  get tagsStr(): string[] {
    return this._tagsStr;
  }

  constructor(
    private logger: NGXLogger,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.debug('Changes ', changes);

    if (changes['post']?.currentValue && changes['tags']?.currentValue) {
      this.post.tags.forEach((id: number) => {
        const tag = this.tags.find((t: Tag) => t.id === id);
        if (tag) {
          this._tagsStr.push(tag.name);
        }
      })
    }
  }

  error($event: Event): void {
    this.logger.debug('Event ', $event);

    if ($event.type === 'error') {
      this._missingImage = true;
    }
  }
}
