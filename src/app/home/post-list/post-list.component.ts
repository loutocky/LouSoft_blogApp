import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogPost, BlogService, Tag, TagService } from 'api';
import { filter, finalize, map, Observable, publishReplay, refCount, tap } from 'rxjs';

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
    ) {

    }

    ngOnInit(): void {
      // there is missing some anotation in backend, service returns object instead of array
      // convert to any
      // there should be param for paging
      this.posts$ = <any>this.blogApi.returnsListOfBlogPosts_().pipe(
        tap((posts: any) => this._posts = posts),
        map((posts: any) => posts.slice(0, this.pageCount)),
        finalize(() => {

        })
      );

      this.tags$ = <any>this.tagApi.getAListOfTags_().pipe(publishReplay(1), refCount());
    }
}
