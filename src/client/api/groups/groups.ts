import { request } from '../request'
import { Response } from '../../typings'
import { Group, CreateGroup, UpdateGroup, GroupId } from './typings'

const getAll = async (): Promise<Response<Group[]>> => {
  const result = await request.get<Group[]>('group')
  return result
}

const getById = async (id: GroupId): Promise<Response<Group>> => {
  const result = await request.get<Group>(`group/${id}`)
  return result
}

const create = async (group: CreateGroup): Promise<Response<Group>> => {
  const result = await request.post<CreateGroup, Group>('group', group)
  return result
}

const update = async (group: UpdateGroup): Promise<Response<Group>> => {
  const result = await request.put<UpdateGroup, Group>('group', group)
  return result
}

const deleteById = async (id: GroupId): Promise<Response<Group>> => {
  const result = await request.delete<void, Group>(`group/${id}`)
  return result
}

export const groupsApi = {
  getAll,
  create,
  deleteById,
  getById,
  update,
}