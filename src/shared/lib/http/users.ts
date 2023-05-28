import { AxiosResponse } from 'axios';
import { v4 } from 'uuid';

import { User } from '../types/user';
import http from '.';

export function getUsers(
  params: Omit<Partial<User>, 'id'>,
): Promise<AxiosResponse<User[]>> {
  return http.get('/users', { params });
}

export function getUser(id: string): Promise<AxiosResponse<User>> {
  return http.get(`/users/${id}`);
}

export function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<AxiosResponse<void>> {
  return http.post('/users', { name, email, password, id: v4() });
}
