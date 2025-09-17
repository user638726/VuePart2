import './assets/index.css'
import { createApp } from 'vue'
import { plugin } from '@formkit/vue'
import config from '../formkit.config'
import { createPinia } from 'pinia'
import {createMetaManager} from 'vue-meta'
import 'iconify-icon'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(plugin,config)
app.use(createMetaManager())
app.use(router)

app.mount('#app')
