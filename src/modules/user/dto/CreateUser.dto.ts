import { IsString, IsNotEmpty, IsDate, IsArray } from 'class-validator';

export default class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  node_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  html_url: string;

  @IsString()
  @IsNotEmpty()
  repos_url: string;

  @IsDate()
  @IsNotEmpty()
  updated_at: Date;

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsNotEmpty()
  repos: Array<string>;
}
