export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type HeaderValue = string | string[] | number;
export type ParamValue = string | number;
export type HeaderCollection = Header[];
export type ParamCollection = Param[];

export interface Header {
  name: string;
  value: HeaderValue;
}

interface Param {
  name: string;
  value: ParamValue;
}

export interface RequestBody {
  readonly [index: string]: any;
}

export interface SuccessResponseBody {
  success: true;
  data: any;
}

export interface ErrorResponseBody {
  success: false;
  error: {
    message: string;
  };
}

export type HttpRequest<T = any> = {
  headers: Header[];
  params: Param[];
  method: HttpMethod;
  body: T;
  query: Param[];
};

export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};
