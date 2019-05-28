// 用于注册Icon组件和批量引入.svg文件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue' // svg组件

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)

requireAll(req)