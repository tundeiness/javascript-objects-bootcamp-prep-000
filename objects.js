
var playlist = new Object({
  Bonjovi: 'oatmeal'
  });
  
  function updatePlaylist(playlist, artisteName, songTitle){
    return Object.assign({}, playList,{[artisteName]: songTitle});
  
  }
  
  function removeFromPlaylist(playList, artisteName){
        delete playList.artisteName;
        return playList;
  }