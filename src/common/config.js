import StorageService from "../services/storage.service";

const CINEMETA_URL = "https://v3-cinemeta.strem.io";
const OPENSUBTITLES_URL = "https://opensubtitles-v3.strem.io";
const STREMIO_API_URL = "https://api.strem.io";
const STREMIO_STREAMING_SERVER = StorageService.get('streaming_server') || "http://localhost:11470";
const ADDON_COMMUNITY_LIST = 'https://stremio-addons.netlify.app/';
const HLS_PLAYLIST = "stream-q-720.m3u8";
const WS_SERVER = process.env.VUE_APP_WS_SERVER;
const APP_TITLE = process.env.VUE_APP_TITLE;

console.log(`[Config] Streaming server is ${STREMIO_STREAMING_SERVER}`);

export {
    CINEMETA_URL,
    OPENSUBTITLES_URL,
    STREMIO_API_URL,
    STREMIO_STREAMING_SERVER,
    ADDON_COMMUNITY_LIST,
    HLS_PLAYLIST,
    WS_SERVER,
    APP_TITLE
};