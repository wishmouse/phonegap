
var app = {
    // Application Constructor
    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        window.addEventListener('batterystatus', onBatteryStatus, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        window.addEventListener('batterystatus', onBatteryStatus, false);
        onBatteryStatus('string')

    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');


        console.log('Received Event: ' + id);
    }

};


function onBatteryStatus(status) {
  document.getElementById('battery').textContent = "Level: " + status.level + " isPlugged: " + status.isPlugged

  console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
