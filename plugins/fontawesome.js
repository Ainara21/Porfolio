import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCameraRetro, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faCameraRetro, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)