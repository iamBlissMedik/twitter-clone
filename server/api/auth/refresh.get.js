import { getRefreshTokenByToken } from "../../db/refreshTokens";
import { getUserById } from "../../db/users";
import { decodeRefreshToken, generateTokens } from "../../utils/jwt";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);
  const refreshToken = cookies.refresh_token;
  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );
  }
  const rToken = await getRefreshTokenByToken(refreshToken);
  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );
  }
  const token = decodeRefreshToken(refreshToken);
  if (token) {
    try {
      const user = await getUserById(rToken.userId);
      return {
        user,
      };
    } catch (error) {
      console.log(error);
    }
  }

  return {
    hello: token,
  };
});
