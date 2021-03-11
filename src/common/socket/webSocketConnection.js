export let socketConnection = null;

export const initSocketConnection = (url) => {
  return new Promise((resolve) => {
    socketConnection = new WebSocket(url);

    socketConnection.onopen = () => {
      resolve(socketConnection);
    };

    // socketConnection.onerror = (error) => {
    //   reject(error);
    // };
  });
};
