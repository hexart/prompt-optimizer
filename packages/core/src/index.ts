// Core package entry point

// 导出模板相关
export { TemplateManager, templateManager } from './services/template/manager'
export * from './services/template/types'
export * from './services/template/defaults'
export * from './services/template/errors'

// 导出历史记录相关
export { HistoryManager, historyManager } from './services/history/manager'
export * from './services/history/types'
export * from './services/history/errors'

// 导出LLM服务相关
export { LLMService, createLLMService } from './services/llm/service'
export * from './services/llm/types'
export * from './services/llm/errors'

// 导出模型管理相关
export { ModelManager, modelManager } from './services/model/manager'
export * from './services/model/types'
export * from './services/model/defaults'

// 导出提示词服务相关
export { PromptService, createPromptService } from './services/prompt/service'
export * from './services/prompt/types'
export * from './services/prompt/errors'

// 导出环境工具函数
export {
  isBrowser,
  isVercel,
  getProxyUrl,
  checkVercelApiAvailability,
  resetVercelStatusCache
} from './utils/environment';