
export const getImageUrl = (path) => {
    return new URL(`/${path}`, window.location.origin).href;
  };
  