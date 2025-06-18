export const handler = async (event) => {
  // 从请求头或 Cookie 获取 environment 标识
  const environment = event.headers['X-Environment'] || 'blue';  // 默认是 blue

  // 模拟不同环境的响应
  const responseMessage = environment === 'blue' 
      ? '3bbbbYou are using the Blue Environment.' 
      : '3bbbbYou are using the Green Environment.';

  return {
      statusCode: 200,
      body: JSON.stringify({
          message: responseMessage,
          environment: environment
      }),
      headers: {
          "Content-Type": "application/json",
      },
  };
};