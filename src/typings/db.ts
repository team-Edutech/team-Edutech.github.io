export interface IUser {
  email: string;
  name: string;
  userId: string;
}

export interface IUserProfile {
  name: string;
  email: string;
  avatar: string;
  token: string;
}

export interface IMe {
  token: string;
  email: string;
  name: string;
  myCourses: {
    numbersTaken: number[];
    courseId: string;
    numberCurrent: number;
    isFinished: boolean;
  }[]
}

export interface Feed {
    title: string;
    text: string;
    category: string;
}

export interface IFeed extends Feed {
    id: string;
    user: IUser;
    images: string[];
    likeUser: string[];
    like: number;
    createdAt: string;
    updatedAt: string;
}


export interface IVideo {
  number: number;
  path: string;
  seasonNumber: number;
  title: string;
  duration: number;
}

export interface ICourse {
  title: string;
  category: string;
  description: string;
  image: string;
  level: string;
  instructorName: string;
  orgPrice: number;
  dcPrice?: number;
  tags?: string[];
  id: string;
  sold?: number;
  views?: number;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  },
}

export interface ICourseVideo {
  course: ICourse;
  videos: IVideo[] | { message: string };
}

export interface ICourseStat {
  id: string;
  title: string;
  progess: {
    my: number[];
    average: number[];
    superCoder: number[];
    weekOnWeek: number;
  },
  currentCourse: string;
  nextCourse: string;
}

export interface IEpisode {
  title: string;
  number: number;
  duration: number;
  seasonNumber: number;
}

export interface IReview {
    title: string;
    content: string;
    star: number;
    createdAt: string;
}

export interface IOrder {
  paymentId: string;
  isPaid: string;
  amountToBePaid: number;
  amountPaid: number;
  id: string;
}

export interface MyOrder {
  orderId: string;
  orgPrice: number;
  
}

export interface Buyer {
  name: string;
  email: string;
  tel: string;
}
