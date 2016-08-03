import requester from './requester';

function init() {
  requester({ endpoint: 'https://api.pinboard.in/v1/posts/all?auth_token=yawnson:090F86B80712384AE3BE&format=json' })
    .then((res) => console.log(res));
}

console.log('we loaded');

init();