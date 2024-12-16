import axios from "axios";

const API_URL_LIST = `${process.env.REACT_APP_API_URL}/lists`;
const API_URL_ITEM = `${process.env.REACT_APP_API_URL}/items`;

export const createList = async (newList) => {
  const response = await axios.post(`${API_URL_LIST}/create`, newList);
  return response.data;
};

export const fetchLists = async (userId) => {
  const response = await axios.get(`${API_URL_LIST}/list/${userId}`);
  return response.data;
};

export const getList = async (listId) => {
  const response = await axios.get(`${API_URL_LIST}/get/${listId}`);
  return response.data;
};

export const updateList = async (listId, updateData) => {
  const response = await axios.put(
    `${API_URL_LIST}/update/${listId}`,
    updateData
  );
  return response.data;
};

export const manageGuests = async (listId, updateData) => {
  const response = await axios.put(
    `${API_URL_LIST}/manage/${listId}`,
    updateData
  );
  return response.data;
};

export const deleteList = async (listId) => {
  const response = await axios.delete(`${API_URL_LIST}/delete/${listId}`);
  return response.data;
};

export const createItem = async (listId, updateData) => {
  const response = await axios.post(
    `${API_URL_ITEM}/add/${listId}`,
    updateData
  );
  return response.data;
};

export const updateItem = async (listId, updateData) => {
  const response = await axios.put(
    `${API_URL_ITEM}/update/${listId}`,
    updateData
  );
  return response.data;
};

export const deleteItem = async (listId, itemId) => {
  const response = await axios.delete(
    `${API_URL_ITEM}/remove/${listId}/item/${itemId}`
  );
  return response.data;
};
