import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { BlogPost, BlogPostDetail, BlogService, Tag } from 'api';
import { NGXLogger } from 'ngx-logger';
import { Observable, tap } from 'rxjs';
import { Constants } from 'src/app/shared';
import { SharedService } from 'src/app/shared/services/shared.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {

  post$: Observable<BlogPostDetail>;

  tagsStr: string[] = [];

  private _missingImage: boolean = false;
  get missingImage(): boolean {
    return this._missingImage;
  }

  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private logger: NGXLogger,
    private sharedService: SharedService,
    ) {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] + '';
      this.post$ = this.service.getDetailsOfABlogPost_(id).pipe(
        tap((post: BlogPostDetail) => {
          this.tagsStr = this.sharedService.getTags(post.tags);
        })
      );
    })
  }

  error($event: Event): void {
    this.logger.debug('Event ', $event);

    if ($event.type === 'error') {
      this._missingImage = true;
    }
  }
}
