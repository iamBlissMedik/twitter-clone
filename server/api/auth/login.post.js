import { sendError } from "h3";
import bcrypt from "bcrypt";
import { getUserByUsername } from "../../db/users";
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

  // generate tokens
    // access tokens
    // refresh tokens
    
  return {
    user,
    doesThePasswordMatch,
  };
});
