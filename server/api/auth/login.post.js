import { sendError } from "h3";
import bcrypt from "bcrypt";
import { getUserByUsername } from "../../db/users";
import { generateTokens } from "../../utils/jwt";
import { userTransformer } from "../../transformers/user";
import { createRefreshToken } from "../../db/refreshTokens";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "invalid params",
      })
    );
  }
  // is the user registered
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // compare passwords
  const doesThePasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesThePasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: " password is invalid",
      })
    );
  }

  // generate tokens
  // access tokens
  // refresh tokens
  const { accessToken, refreshToken } = generateTokens(user);

  // save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
