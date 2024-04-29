class PointsDto {
  category: string;
  average: number;
  roundedAverage: number;
  reviews: number;

  constructor() {
    this.category = '';
    this.average = 0;
    this.roundedAverage = 0;
    this.reviews = 0;
  }
}

class BreadCrumbData {
  name!: string;
}

export {
  PointsDto,
  BreadCrumbData
};