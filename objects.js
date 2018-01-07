
var playlist = new Object({
  Bonjovi: 'oatmeal'
  });
  
  function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({}, playlist,{[artistName]: songTitle});
  
  }
  
  function removeFromPlaylist(playlist, artistName){
        delete playList.artistName;
        return playList;
  }