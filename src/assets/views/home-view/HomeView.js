import './home-view.scss';

export default class HomeView {
    renderView() {
        const homeView = document.createElement('div');
        homeView.classList.add('home-view');
        const linkElement = document.createElement('a');
        linkElement.href = 'videos.html';
        linkElement.innerHTML = 'View videos';
        homeView.appendChild(linkElement);
        document.body.appendChild(homeView);
    }
}
