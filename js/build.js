var intervalId;

    function displayUserAgent() {
        var userAgentString = navigator.userAgent;
        var htmlContent = '<i class="fas fa-circle-info"></i>&nbsp;\StuffyXP Website "One Last Fix" Version 2.1.2.2100.main.250212-0923: Bulma v1.0.0 & Jekyll v4.3.3&nbsp;&nbsp;<i class="fas fa-user-gear"></i>&nbsp;' + userAgentString;
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

