import { Injectable } from "@angular/core";
import { Tag } from "api";
import { Constants } from "../models/constants";
import { StorageService } from "./storage.service";

@Injectable()
export class SharedService {

  constructor(
    private storage: StorageService,
  ) {

  }

  getTags(t: number[]): string[] {
    const ret: string[] = [];

    const tags: Tag[] = this.storage.getStorageObject(Constants.TAGS, null);
    if (tags) {
      t.forEach((id: number) => {
        const tag = tags.find((t: Tag) => t.id === id);
        if (tag) {
          ret.push(tag.name);
        }
      })
    }

    return ret;
  }
}
