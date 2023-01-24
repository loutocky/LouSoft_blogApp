export * from './default.service';
import { DefaultService } from './default.service';
export * from './blog.service';
import { BlogService } from './blog.service';
export * from './tag.service';
import { TagService } from './tag.service';
export const APIS = [DefaultService, BlogService, TagService];
