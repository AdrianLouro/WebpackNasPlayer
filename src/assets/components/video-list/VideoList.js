import VideoProvider from 'Providers/VideoProvider';
import './video-list.scss';

export default class VideoList {
    createElement() {
        const listElement = document.createElement('div');
        listElement.classList.add('video-list');

        VideoProvider.load()
            .forEach(video => {
                listElement.appendChild(this.createVideoElementFrom(video));
            });

        return listElement;
    }

    createVideoElementFrom(video) {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-list__video');
        const url = document.createElement('a');
        url.href = video.url;
        url.innerHTML = video.name
        videoElement.appendChild(url);
        return videoElement;
    }
}