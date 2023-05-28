import { AxiosResponse } from 'axios';

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
