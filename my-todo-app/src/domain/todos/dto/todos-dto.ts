export interface TodosBasicDto {
  id: string;
  title: string;
}

export interface TodosCreateDto {
  title: string;
  description: string;
  completed: boolean;
}

export interface TodosDto extends TodosBasicDto {
  description: string;
  completed: boolean;
}
