import { BaseDto } from "@app/globals/base";

class ManufacturerDto extends BaseDto {
  name: string;

  constructor() {
    super();
    this.name = '';
  }
}

export { ManufacturerDto };