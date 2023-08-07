export type Thumbnails = {
    default: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  
export type Snippet = {
    [key : string] : any;
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
};

export type VideoType = {
    [key: string]: any;
    id: {
        kind: "youtube#channel" | "youtube#video";
        videoId?: string;
        channelId ? : string,
        [key : string] : any
    };
    snippet: Snippet;
};
