type User = {
  id: string;
  name: string;
}


export type ServerReview = {
  id: string;
  comment: string;
  rating: number;
  user: User;
  date: string;
};
export type Review = {
  id: number,
  text: string,
  rating: number,
  author: string,
  date: string,
     
}
