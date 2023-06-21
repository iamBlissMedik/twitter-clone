import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, repeatPassword, name } = body;
  if (!username || !email || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }
  return {
    body,
  };
});
