window.onload = () => {

    document.getElementById('meButton').addEventListener('click', function() {
        document.getElementById('meWindow').setAttribute('style','visibility: visible');
        document.getElementById('meWindowCloseButton').addEventListener('click', function() {
            document.getElementById('meWindow').setAttribute('style','visibility: hidden');
        })
    })

    document.getElementById('chatButton').addEventListener('click', function() {
        document.getElementById('chatWindow').setAttribute('style','visibility: visible');
        document.getElementById('chatWindowCloseButton').addEventListener('click', function() {
            document.getElementById('chatWindow').setAttribute('style','visibility: hidden');
        })
    })

    document.getElementById('storyButton').addEventListener('click', function() {
        document.getElementById('storyWindow').setAttribute('style','visibility: visible');
        document.getElementById('storyWindowCloseButton').addEventListener('click', function() {
            document.getElementById('storyWindow').setAttribute('style','visibility: hidden');
        })
    })
    

}