const headers = {
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'accept': 'application/json'
};
const apiURL = 'https://repetitora.net/api/JS/Tasks';
const corsMode = 'cors';

/**
 *
 * @param url
 * @param type
 * @param body
 */
function requestData(url, type, body) {
  return fetch(url,
      {
        method: type,
        body: body,
        headers: headers,
        mode: corsMode
      })
      .then(result => result.json());
}

/**
 *
 * @param title
 * @param widgetId
 */
export function ToDoListServicesCreateTask(title, widgetId) {
  const data = new URLSearchParams();
  data.append('widgetId', widgetId);
  data.append('title', title);
  //
  return requestData(apiURL, 'POST', data);
}

/**
 *
 * @param widgetId
 */
export function ToDoListServicesGetTasks(widgetId) {
  return requestData(`${apiURL}?widgetId=${widgetId}&count=30`, 'GET', null);
}