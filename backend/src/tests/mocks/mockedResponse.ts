const generateMockedResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = (message: any) => message;
  jest.spyOn(res, 'send');
  return res;
};

export default generateMockedResponse()
