export interface askListTypes {
  askList: askTypes[];
}

export interface askTypes {
  askId: number;
  authorId: string;
  askTitle: string;
  askContent: string;
  mbti: string;
  Like: number;
  comments: commentTypes[];
}

interface commentTypes {
  commentId: string;
  commentContent: string;
  authorId: string;
  mbti: string;
}
