const axios = require('axios');

export const getFilesFromIPFS = () => {
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
        pinata_api_key: '4eb04864b87b11627705',
        pinata_secret_api_key:
          '6312329d9eaa3d999a1f637ad27b3539dc2fe7f64153a6f872994b33e1c15042',
      },
    })
    .then(function(response) {
      //handle response here
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      //handle error here
      console.log(error);
    });
};
