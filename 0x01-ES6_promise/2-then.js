export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }), () => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
