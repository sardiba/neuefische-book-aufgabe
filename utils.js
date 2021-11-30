export default fetchData = async () => {
  console.log("Call buddies day");

  const response = await fetch(
    "https://date.nager.at/api/v3/PublicHolidays/2022/DE",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Referrer Policy": "strict-origin-when-cross-origin",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  );

  console.log(response);

  // const getBuddiesDay = await fetch(
  //   "https://date.nager.at/api/v3/PublicHolidays/2022/DE",
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       Connection: "keep-alive",
  //       "Referrer Policy": "strict-origin-when-cross-origin",
  //       "User-Agent":
  //         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0",
  //     },
  //   }
  // );

  const buddiesList = await response.json();
  return buddiesList;
};
