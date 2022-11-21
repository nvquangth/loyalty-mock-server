export class BaseResponse<T> {
  private code: number = 0;
  private message: string = "";
  private data?: T;

  constructor(code?: number, message?: string, data?: T) {
    if (code) {
      this.code = code;
    }
    if (message) {
      this.message = message;
    }
    if (data) {
      this.data = data;
    }
  }

  get Code() {
    return this.code;
  }

  set Code(value) {
    this.code = value;
  }

  get Message() {
    return this.message;
  }

  set Message(value) {
    this.message = value;
  }

  get Data() {
    return this.data;
  }

  set Data(value) {
    this.data = value;
  }
}

export enum ResponseCode {
  SUCCESS = 0,
  ERROR = -1,
  UNAUTHORIZED = 201,
}
