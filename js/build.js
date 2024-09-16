var intervalId;

    function displayUserAgent() {
        var userAgentString = navigator.userAgent;
        var htmlContent = '<i class="fas fa-circle-info"></i>&nbsp;\StuffyXP Website "New Coat of Paint"; (2.0.1986.main.240916-1408): Bulma 1.0.0 & Jekyll 4.3.3&nbsp;&nbsp;<i class="fas fa-user-gear"></i>&nbsp;' + userAgentString;
        document.getElementById('userAgent').innerHTML = htmlContent;
    }

    function handleShiftKeyPress(event) {
        if (event.keyCode === 16) {
            displayUserAgent();
            updateDateTime();
            intervalId = setInterval(updateDateTime, 1000);
        }
    }



    function handleShiftKeyRelease(event) {
        if (event.keyCode === 16) {
            clearInterval(intervalId);
            document.getElementById('userAgent').innerHTML = '';
            document.getElementById('websiteBuild').innerHTML = '';
        }
    }

    document.addEventListener('keydown', handleShiftKeyPress);
    document.addEventListener('keyup', handleShiftKeyRelease);

