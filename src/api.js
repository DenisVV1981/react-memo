export function getLeadersList() {
  return fetch(" https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  }).then(response => {
    if (!response.ok) {
      throw new Error("ошибка сервера");
    }
    return response.json();
  });
}
