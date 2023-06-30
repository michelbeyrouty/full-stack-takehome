export default function generateMockedRequest(body?: any): any {
  return {
    body: body,
    query: 'query',
    headers: 'headers',
    method: 'method',
    path: 'path',
    params: 'params',
  };
};
