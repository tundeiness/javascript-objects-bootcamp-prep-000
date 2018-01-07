
var playlist = new Object({
  Bonjovi: 'oatmeal'
  });
  
  function updatePlayList(playlist, artisteName, songTitle){
    return Object.assign({}, playlist,{[artisteName]: songTitle});
  
  }
  
  function removeFromPlayList(playList, artisteName){
        delete playList.artisteName;
        return playList;
  }