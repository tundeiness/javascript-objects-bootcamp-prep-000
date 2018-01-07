
var playlist = new Object({
  Bonjovi: 'oatmeal'
  });
  
  function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({}, playlist,{[artistName]: songTitle});
  
  }
  
  function removeFromPlayList(playList, artisteName){
        delete playList.artisteName;
        return playList;
  }