export const normalizePhotos = (data) => {
    return data.results.map((item) => ({
        id: item.id,
        type: "image",
        title: item.alt_description || "Untitled",
        thumbnail: item.urls.small,
        src: item.urls.regular,
        url: item.links.html,
    }));
};

export const normalizeVideos = (data) => {
    return data.videos.map((item) => {
        const videoFile = item.video_files.find(
            (file) => file.quality === "hd"
        ) || item.video_files[0];

        return {
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: videoFile?.link || "",
            url: item.url,
        };
    });
};

export const normalizeGIFs = (data) => {
    return data.data.map((item) => ({
        id: item.id,
        type: "gif",
        title: item.title || "GIF",
        thumbnail: item.images.fixed_width_small.url,
        src: item.images.original.url,
        url: item.url,
    }));
};