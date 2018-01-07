
var playList = new Object({
  Bonjovi: 'oatmeal'
  });
  
  function updatePlayList(playList, artisteName, songTitle){
    return Object.assign({}, playList,{[artisteName]: songTitle});
  
  }
  
  function removeFromPlayList(playList, artisteName){
        delete playList.artisteName;
        return playList;
  }