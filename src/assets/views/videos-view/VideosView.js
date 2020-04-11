import VideoList from 'Components/video-list/VideoList';
import './videos-view.scss';

export default class VideosView {
    renderView() {
        const videosView = document.createElement('div');
        videosView.classList.add('videos-view');
        videosView.appendChild(new VideoList().createElement());
        document.body.appendChild(videosView);
    }
}
