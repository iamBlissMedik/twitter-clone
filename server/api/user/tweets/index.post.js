import formidable from "formidable";
import { createTweet } from "../../../db/tweets";
import { tweetTransformer } from "../../../transformers/tweet";
export default defineEventHandler(async (event) => {
  const form = formidable({});
  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
  const { fields, files } = response;
  const userId = event.context?.auth?.user?.id;
  const tweetData = {
    text: fields.text[0],
    authorId: userId,
  };
  const tweet = await createTweet(tweetData);

  return {
    tweet: tweetTransformer(tweet),
  };
});
