import { get } from 'lodash'

const GA4 = (event = 'event', value = {}) => {
  try {
    setTimeout(() => {
      const gtag = get(window, 'gtag', () => { })
      return gtag('event', event, value)
    }, 200)
  } catch (error) {
    console.error('GA4', error)
  }
}

export { GA4 }