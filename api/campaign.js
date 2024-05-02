import endpoint from "./endpoint.js";

export async function updateCampaign(id, body, subject) {
  const data = new FormData();
  data.append("body", body);
  data.append("subject", subject);

  return fetch(
    `${endpoint.localhost}:7777/update/?id=${id}`,
    {
      method: "POST",
      body: data,
    }
  ).then((data) => data.json()).then(r => {
    console.log(r)
    return r
  });
}
