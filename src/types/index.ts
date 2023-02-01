export interface askListTypes {
  askList: askTypes[];
}

export interface askTypes {
  askId: number;
  authorId: string;
  askContent: string;
  authorMbti: string;
  askMbti: string;
  like: number;
  comments: commentTypes[];
}

interface commentTypes {
  commentId: string;
  commentContent: string;
  authorId: string;
  authorMbti: string;
}
