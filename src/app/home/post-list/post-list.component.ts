import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from 'api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  posts$: Observable<BlogPost>;

  constructor(
    private service: BlogService,
    ) {

    }

    ngOnInit(): void {
      this.posts$ = this.service.returnsListOfBlogPosts_();
    }
}
