import formidable from "formidable";
import { createTweet } from "../../../db/tweets";
import { tweetTransformer } from "../../../transformers/tweet";
import { createMediaFile } from "../../../db/mediaFiles";
import { uploadToCloudinary } from "../../../utils/cloudinary";
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
    text: fields.text?.[0],
    authorId: userId,
  };
  const replyTo = fields.replyTo?.[0];
  if (replyTo && replyTo !== "undefined" && replyTo !== "null") {
    tweetData.replyToId = replyTo;
  }
  const tweet = await createTweet(tweetData);

  const filePromises = Object.keys(files).map(async (key) => {
    const fileArr = files[key];
    const file = fileArr[0];
    const cloudinaryResource = await uploadToCloudinary(file.filepath);
    const { secure_url, public_id } = cloudinaryResource;
    return createMediaFile({
      url: secure_url,
      providerPublicId: public_id,
      userId: userId,
      tweetId: tweet.id,
    });
  });
  await Promise.all(filePromises);

  return {
    tweet: tweetTransformer(tweet),
  };
});
