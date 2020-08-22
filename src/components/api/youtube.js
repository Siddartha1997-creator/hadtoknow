import axios from 'axios';

const KEY= 'AIzaSyAJ45lfKtXaDviIQPCIt0a4rOtPe7SUOdg';

export default axios.create({

baseURL: 'https://www.googleapis.com/youtube/v3',
params:{
part: 'snippet',
type: 'video',
maxResults:5,
key: KEY
}

});


