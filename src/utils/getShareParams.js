import { resolve } from "url";

export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareText = `#языкисеверстали`;
    // const shareImage = resolve(url, result.shareImage[socialNetwork]);

    const queryParams = new URLSearchParams();
    queryParams.append("url", url);
    queryParams.append("title", shareText);
    // queryParams.append("image", image);
    queryParams.append("comment", shareText);

    return `http://vk.com/share.php?${queryParams.toString()}`;
};