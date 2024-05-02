export async function getTranslations({ tableId, tableName, tableRange, name }, token) {

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}${tableRange}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    return {...data, name};
  } catch (error) {
    console.log(error);
  }
}
