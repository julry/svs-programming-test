import { resolve } from "url";
import { SEVERSTAL_TAG } from '../constants/hashtag';

export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareText = SEVERSTAL_TAG;
    const shareImage = resolve(url, result.shareImage);

    const queryParams = new URLSearchParams();
    queryParams.append("url", url);
    queryParams.append("title", shareText);
    queryParams.append("image", shareImage);
    queryParams.append("comment", shareText);

    return `http://vk.com/share.php?${queryParams.toString()}`;
};