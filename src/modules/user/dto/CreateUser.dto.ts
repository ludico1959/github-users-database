import { IsString, IsNotEmpty } from 'class-validator';

export default class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  login: string;

  id: string;
  node_id: string;
  name: string;
  html_url: string;
  repos_url: string;
  updated_at: Date;
  created_at: Date;
  email: string;
  repos: Array<string>;
}
