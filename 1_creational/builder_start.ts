// todo: simplify the constructions of this complex object

// we need this object which got a lot of pro
interface httpRequest {
  url:string;
  method:string;
  body:Record<string, string>;
  params:string;
  headers:Record<string, string>;
  retry:string;
}

// we can encapsulate the creation logic
class HttpRequest {
  private _url: string;
  private _method: string;
  private _body: Record<string, string>;
  private _params: any;
  private _headers: Record<string, string>;
  private _retry: number;

  constructor(url: string, method: string, body?: Record<string, string>, params?: any, headers?: any, retry?: number) {
    this._url = url;
    this._method = method;
    this._body = body;
    this._params = params;
    this._headers = headers;
    this._retry = retry;
  }

  getOptions() {
    const request = {
      url: this._url,
      method: this._method
    }

    // build header
    if(this._headers) {
      const headers = new Headers(this._headers);
      Object.assign(request, headers);
    }

    if(this._params) {
      // todo: loop over params, validate and add to request
      Object.assign(request, {params: this._params});
    }

    // validate and process required arguments
    return request;
  }
}

// todo: build the request options
const requestOptions = new HttpRequest('someUrl', 'GET', { username: 'nir' }, {cache: true}, {token: 'azs123'}, 0).getOptions();

// todo: use it to make a request
fetch(requestOptions.url, requestOptions)



