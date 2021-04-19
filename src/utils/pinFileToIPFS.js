const axios = require('axios');
const FormData = require('form-data');

export const pinFileToIPFS = (
  file,
  metaDataObject,
  mintNFTTokenForUploadedFile,
) => {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  //we gather a local file for this example, but any valid readStream source will work here.
  let data = new FormData();
  data.append('file', file);

  //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //metadata is optional
  const metadata = JSON.stringify(metaDataObject);
  data.append('pinataMetadata', metadata);

  //pinataOptions are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: 'FRA1',
          desiredReplicationCount: 1,
        },
        {
          id: 'NYC1',
          desiredReplicationCount: 2,
        },
      ],
    },
  });
  data.append('pinataOptions', pinataOptions);

  return axios
    .post(url, data, {
      maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: '4eb04864b87b11627705',
        pinata_secret_api_key:
          '6312329d9eaa3d999a1f637ad27b3539dc2fe7f64153a6f872994b33e1c15042',
      },
    })
    .then(async (response) => {
      await mintNFTTokenForUploadedFile(response.data.IpfsHash);
    })
    .catch((error) => {
      console.log(error);
    });
};
