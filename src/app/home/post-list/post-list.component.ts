import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogPost, BlogService, Tag, TagService } from 'api';
import { finalize, map, Observable, publishReplay, refCount, tap } from 'rxjs';
import { Constants } from 'src/app/shared';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  posts$: Observable<BlogPost[]>;
  tags$: Observable<Tag[]>;

  pageCount = 5;

  private _posts: BlogPost[] = [];

  get postCount(): number {
    return this._posts.length;
  }

  constructor(
    private blogApi: BlogService,
    private tagApi: TagService,
    private storageService: StorageService,
  ) {

  }

  ngOnInit(): void {
    // there is missing some anotation in backend, service returns object instead of array
    // convert to any
    // there should be param for paging
    this.posts$ = <any>this.blogApi.returnsListOfBlogPosts_().pipe(
      tap((posts: any) => this._posts = posts),
      map((posts: any) => {
        const sorted = posts.sort((a: any, b: any) => a.id - b.id);
        return sorted.slice(0, this.pageCount);
      }),
      finalize(() => {

      })
    );

    // there is missing some anotation in backend, service returns object instead of array
    this.tags$ = <any>this.tagApi.getAListOfTags_().pipe(publishReplay(1), refCount()).pipe(
      tap((tags) => {
        this.storageService.setStorage(Constants.TAGS, JSON.stringify(tags));
      })
    );
  }
}
