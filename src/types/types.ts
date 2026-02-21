export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IReview {
  title: string;
  description: string;
  rating: number;
  img: string;
  thumbnail: string;
}
