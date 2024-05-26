import flagEN from '@flags/eng.webp'
import flagDE from '@flags/de.webp'
import flagDK from '@flags/dk.webp'
import flagUA from '@flags/ua.webp'

export const LOCALES = [
  { name: 'English', alias: 'EN', flag: flagEN },
  { name: 'Deutsch', alias: 'DE', flag: flagDE },
  { name: 'Dansk', alias: 'DK', flag: flagDK },
  { name: 'Ukrana', alias: 'UA', flag: flagUA }
]

export const NOTIFICATION_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Following' },
  { value: 'order', label: 'Orders' },
]

export const MESSAGE_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest' },
  { value: 'archived', label: 'Archive' },
]