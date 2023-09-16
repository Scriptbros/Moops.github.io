document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading 1000 assets
    var totalAssets = 1000;
    var assetsLoaded = 0;
    var loadingBar = document.querySelector('.loading-bar');

    function loadAssets() {
        assetsLoaded++;
        var progress = (assetsLoaded / totalAssets) * 100;
        loadingBar.style.width = progress + '%';

        if (assetsLoaded === totalAssets) {
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 1000);
        }
    }

    for (var i = 0; i < totalAssets; i++) {
        // Simulated asset loading
        setTimeout(loadAssets, Math.random() * 100);
    }

    // Code for moving background (you'll need to implement this based on your specific requirements)
});
          
