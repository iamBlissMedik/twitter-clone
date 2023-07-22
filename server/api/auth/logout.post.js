import { removeRefreshToken } from "../../db/refreshTokens";
import { sendRefreshToken } from "../../utils/jwt";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);
    const refreshToken = cookies.refresh_token;
    //   REMOVE REFRESH TOKEN
    await removeRefreshToken(refreshToken);
    sendRefreshToken(event.node.res, null);
  } catch (error) {
    console.log(error);
  }
  return {
    message: "done",
  };
});
