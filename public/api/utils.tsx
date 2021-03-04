import SSM from 'aws-sdk/clients/ssm';

export const getSecrets = async (names) => {
  const ssm = new SSM();
  const parameters =
    (
      await ssm
        .getParameters({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Names: names,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          WithDecryption: true,
        })
        .promise()
    ).Parameters || [];

  const result = {};
  parameters.forEach((currentItem) => {
    if (currentItem.Name) {
      result[currentItem.Name] = currentItem.Value || '';
    }
  });
  return result;
};