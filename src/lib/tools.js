
import moment from 'moment'
import { global, API_URL } from '@/config'

export const dateSimpleFormat = (dateStr) => {
  if (dateStr) {
    return moment(dateStr).format(global.simpleDateFormatSytle)
  } else {
    return moment().format(global.simpleDateFormatSytle)
  }
}

export const dateFormat = (dateStr) => {
  if (dateStr) {
    console.log(global.dateFormat)
    return moment(dateStr).format(global.dateFormatSytle)
  } else {
    return moment().format(global.dateFormatSytle)
  }
}

export const getApiUrl = (url) => {
  if (url && process.env.NODE_ENV === 'production') {
    return url.replace(/\/api\//, API_URL)
  } else {
    return url
  }
}
