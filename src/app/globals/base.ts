class BaseDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this._id = '',
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }
}

export {
  BaseDto
};