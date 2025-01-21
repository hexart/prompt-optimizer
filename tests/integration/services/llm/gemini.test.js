import { createLLMService } from '../../../../src/services/llm/service';
import { ModelManager } from '../../../../src/services/model/manager';
import { expect, describe, it, beforeEach, beforeAll } from 'vitest';
import dotenv from 'dotenv';
import path from 'path';

// 加载环境变量
beforeAll(() => {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
});

describe('Gemini API 测试', () => {
  // 跳过没有设置 API 密钥的测试
  const apiKey = process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    it.skip('应该能正确调用 Gemini API', () => {});
    it.skip('应该能正确处理多轮对话', () => {});
    return;
  }

  it('应该能正确调用 Gemini API', async () => {
    const modelManager = new ModelManager();
    const llmService = createLLMService(modelManager);

    // 更新 Gemini 配置
    modelManager.updateModel('gemini', {
      apiKey,
      enabled: true
    });

    const messages = [
      { role: 'user', content: '你好，我们来玩个游戏' }
    ];

    const response = await llmService.sendMessage(messages, 'gemini');
    expect(response).toBeDefined();
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  it('应该能正确处理多轮对话', async () => {
    const modelManager = new ModelManager();
    const llmService = createLLMService(modelManager);

    // 更新 Gemini 配置
    modelManager.updateModel('gemini', {
      apiKey,
      enabled: true
    });

    const messages = [
      { role: 'user', content: '你好，我们来玩个游戏' },
      { role: 'assistant', content: '好啊，你想玩什么游戏？' },
      { role: 'user', content: '我们来玩猜数字游戏，1到100之间' }
    ];

    const response = await llmService.sendMessage(messages, 'gemini');
    expect(response).toBeDefined();
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  }, { timeout: 10000 });
}); 