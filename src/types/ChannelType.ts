import { Thumbnails } from "./VideoType";

type ChannelSnippet = {
    country? : string,
    customUrl? : string,
    description? : string,
    localized? : object,
    thumbnails? : Thumbnails,
    title? : string,
    publishedAt? : string,
}

type ChannelObjectType = {
    country? : string,
    description? : string,
    title : string,
    unsubscribedTrailer? : string,
    keywords? : string
}

type StatisticsType = {
    hiddenSubscriberCount? : boolean,
    subscriberCount : string | number,
    videoCount : string | number,
    viewCount? : string | number
}

export type ChannelBrandingSettingsType = {
    channel : ChannelObjectType,
    image : {
        bannerExternalUrl : string
    },
    statistics : StatisticsType,
}

export type ChannelType = {
    [key: string]: any;
    id: {
        kind: "youtube#channel" | "youtube#video";
        videoId?: string;
        channelId ? : string,
        [key : string] : any
    };
    snippet: ChannelSnippet;
};
