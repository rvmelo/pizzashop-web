import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-revenue-orders-amount', () => {
  return HttpResponse.json(
    {
      receipt: 100,
      diffFromLastMonth: 7,
    },
    {
      status: 200,
    },
  )
})
