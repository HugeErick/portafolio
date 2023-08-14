import { FeedbackPost, User } from "@prisma/client";

export type ExtendedFeedbackPost = FeedbackPost & {
  creator: User;
};
