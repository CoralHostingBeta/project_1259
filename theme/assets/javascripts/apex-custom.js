var searchInput = document.getElementsByClassName("searchBox")[0];
function handleSearchKeyPress (target, hostName) {
    if (target.which === 13 || target.keyCode === 13) {
        window.location = hostName+'/dashboard/search?q=' + searchInput.value;
    }
}

