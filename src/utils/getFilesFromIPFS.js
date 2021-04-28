const axios = require('axios');

export const getFilesFromIPFS = () => {
  // parameter of this func should the queryParams => implement here search logic with passing queryParams object with filter logic
  const queryParams = { selectedPinStatus: 'pinned' };
  let queryString = '?';
  if (queryParams.hashContains) {
    queryString = queryString + `hashContains=${queryParams.hashContains}&`;
  }
  if (queryParams.pinStartDate) {
    queryString = queryString + `pinStart=${queryParams.pinStartDate}&`;
  }
  if (queryParams.pinEndDate) {
    queryString = queryString + `pinEnd=${queryParams.pinEndDate}&`;
  }
  if (queryParams.unpinStartDate) {
    queryString = queryString + `unpinStart=${queryParams.unpinStartDate}&`;
  }
  if (queryParams.unpinEndDate) {
    queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
  }
  if (queryParams.selectedPinStatus) {
    queryString = queryString + `status=${queryParams.selectedPinStatus}&`;
  }
  if (queryParams.unpinEndDate) {
    queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
  }
  if (queryParams.unpinEndDate) {
    queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
  }
  if (queryParams.pageLimit) {
    queryString = queryString + `pageLimit=${queryParams.pageLimit}&`;
  }
  if (queryParams.pageOffset) {
    queryString = queryString + `pageOffset=${queryParams.pageOffset}&`;
  }
  if (queryParams.nameContains) {
    queryString = queryString + `metadata[name]=${queryParams.nameContains}&`;
  }
  //Make sure keyvalues are properly formatted as described earlier in the docs.
  if (queryParams.keyvalues) {
    const stringKeyValues = JSON.stringify(queryParams.keyvalues);
    queryString = queryString + `metadata[keyvalues]=${stringKeyValues}`;
  }
  const url = `https://api.pinata.cloud/data/pinList${queryString}`;
  return axios
    .get(url, {
      headers: {
        pinata_api_key: '2cc8bce8c35e580ba3bc',
        pinata_secret_api_key:
          '5f79be1b2ccad88ffc91905b43df26547fc62e31d3e3378435fbeda24b1c0c71', // we can expose them, the secret is only valid for the get pinlist endpoint
      },
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
};

// new public keys
// API Key
// 2cc8bce8c35e580ba3bc

// API Secret
// 5f79be1b2ccad88ffc91905b43df26547fc62e31d3e3378435fbeda24b1c0c71

// old keys - got often 429 too many requests
// pinata_api_key: '7d0edc5d639b578a490c',
// pinata_secret_api_key:
//   '87039c6ca1554bc5722e865de57647f9210f4fefe541d7e1edc1f82aaad72e88',
