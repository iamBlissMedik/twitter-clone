import { getTweets } from "../../db/tweets";

export default defineEventHandler(async (event) => {
  const tweets = await getTweets();
  return {
    tweets: tweets,
  };
});
