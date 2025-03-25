export interface TodosBasicDto {
  id: string;
  title: string;
}

export interface TodosDto extends TodosBasicDto {
  description: string;
  completed: boolean;
}
