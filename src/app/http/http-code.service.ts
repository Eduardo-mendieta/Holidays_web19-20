import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCodeService {

  public CREATED = 201;
  public OK = 200;
  public CLIENT_ERROR_SYNTAX = 400;
  public RESOURCE_NOT_FOUND = 404;
  public IO_EXCEPTION = 453;
  public INVALID_IMAGE_FORMAT = 454;
  public INVALID_DATE_FORMAT = 455;
  public INVALID_RESERVATION_DATES = 456;
  public INTERNAL_SERVER_ERROR = 500;
  public UNAUTHORIZED_USER = 401;

  constructor() { }
}
