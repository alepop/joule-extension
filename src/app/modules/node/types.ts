enum NodeTypes {
  CHECK_NODE = 'CHECK_NODE',
  CHECK_NODE_SUCCESS = 'CHECK_NODE_SUCCESS',
  CHECK_NODE_FAILURE = 'CHECK_NODE_FAILURE',

  CHECK_NODES = 'CHECK_NODES',

  CHECK_AUTH = 'CHECK_AUTH',
  CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS',
  CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE',

  UPDATE_NODE_URL = "UPDATE_NODE",
  UPDATE_NODE_URL_SUCCESS = "UPDATE_NODE_URL_SUCCESS",
  UPDATE_NODE_URL_FAILURE = "UPDATE_NODE_URL_FAILURE",
  SET_EDITING_NODE_FIELD = "SET_EDITING_NODE_FIELD",

  GET_NODE_INFO = 'GET_NODE_INFO',
  GET_NODE_INFO_SUCCESS = 'GET_NODE_INFO_SUCCESS',
  GET_NODE_INFO_FAILURE = 'GET_NODE_INFO_FAILURE',

  SET_NODE = 'SET_NODE',
  RESET_NODE = 'RESET_NODE',
  
  SYNC_UNENCRYPTED_NODE_STATE = 'SYNC_UNENCRYPTED_NODE_STATE',
  SYNC_ENCRYPTED_NODE_STATE = 'SYNC_ENCRYPTED_NODE_STATE',
}

export type EditingNodeField = null | 'url' | 'readonly' | 'admin';

export default NodeTypes;
