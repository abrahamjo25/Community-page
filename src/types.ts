
 interface CommentData  {
  id: number;
  postId?: number;
  display: string;
  author: string;
  commentedDate: string;
  children: CommentData[];
};

interface MatchParams {
  id?: string;
}
interface Author {
  name: string;
  avatar: string;
  date: string;
}

 interface Post {
  id: number;
  img: string;
  tag: string;
  title: string;
  description: string;
  authors: Author[];
}

