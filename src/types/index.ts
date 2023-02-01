export interface askListTypes {
  askList: askTypes[];
}

export interface askTypes {
  askId: number;
  authorId: string;
  askTitle: string;
  askContent: string;
  authorMbti: string;
  askMbti: string;
  Like: number;
  comments: commentTypes[];
}

interface commentTypes {
  commentId: string;
  commentContent: string;
  authorId: string;
  authorMbti: string;
}
