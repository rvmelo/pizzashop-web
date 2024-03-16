import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { receipt: 300, date: '10/03/2024' },
    { receipt: 500, date: '11/03/2024' },
    { receipt: 3000, date: '12/03/2024' },
    { receipt: 5000, date: '13/03/2024' },
    { receipt: 600, date: '14/03/2024' },
    { receipt: 700, date: '15/03/2024' },
    { receipt: 1000, date: '16/03/2024' },
  ])
})
