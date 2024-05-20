export function getFilterQueryString(filterParams) {
  const { name, status } = filterParams;
  let queryString = "";
  if (name) {
    queryString += `name=${filterParams.name}`;
  }
  if (status) {
    const paramConnector = queryString ? "&" : "";
    queryString += `${paramConnector}status=${filterParams.status}`;
  }
  return queryString;
}
