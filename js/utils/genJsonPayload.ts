const genJsonPayload = (payload: any) => {
  const value = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  return value;
};

export default genJsonPayload;
