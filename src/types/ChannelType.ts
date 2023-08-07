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


export type ChannelBrandingSettingsType = {
    
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
