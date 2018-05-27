export const PAGE_LOAD_START = "PAGE_LOAD_START";
export const PAGE_LOAD_END = "PAGE_LOAD_END";

export const startLoading = () => {
  return {
    type: PAGE_LOAD_START
  };
};

export const endLoading = () => {
  return {
    type: PAGE_LOAD_END
  };
};
