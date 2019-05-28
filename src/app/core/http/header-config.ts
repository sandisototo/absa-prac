import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class HeaderConfigService {
  constructor() { }

  public renderRequestHeaders() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return options;
  }
}
