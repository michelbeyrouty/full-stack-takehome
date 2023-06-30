const generateMockedResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = (message: any) => message;
  res.on = jest.fn().mockReturnValue(res);
  jest.spyOn(res, 'send');
  return res;
};

export default generateMockedResponse()
