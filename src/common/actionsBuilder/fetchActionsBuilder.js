const getFetchActionNames = (ACTION_NAME) => ({
  REQUEST: `${ACTION_NAME}_REQUEST`,
  SUCCESS: `${ACTION_NAME}_SUCCESS`,
  ERROR: `${ACTION_NAME}_ERROR`,
});

export default getFetchActionNames;
