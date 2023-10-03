import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'

const url = 'https://dehwzbbqgjctivqfpkfl.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaHd6YmJxZ2pjdGl2cWZwa2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMTM0NjUsImV4cCI6MjAxMTU4OTQ2NX0.IFgJbGvgFY-0qSUAh-PF097ecL8Thga70iB_A2DC57c'

// Khởi tạo ứng dụng khách Supabase
export const supabase = createClient(url, key, {
  auth: {
    storage: AsyncStorage,
    detectSessionInUrl: false,
  },
})
