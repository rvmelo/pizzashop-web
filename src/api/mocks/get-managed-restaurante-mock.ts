import { http, HttpResponse } from 'msw'

import { GetManagedResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    email: 'jhondoe@gmail.com',
    description: 'Custom restaurant description',
    managerId: 'custom user id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
