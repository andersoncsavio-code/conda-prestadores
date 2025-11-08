import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({ plugins: [ react(), VitePWA({ manifest:{ name:'Condá Prestadores', short_name:'Condá Prestadores', theme_color:'#d50000', icons:[{src:'/pwa-192.png',sizes:'192x192',type:'image/png'},{src:'/pwa-512.png',sizes:'512x512',type:'image/png'}] } }) ] })
