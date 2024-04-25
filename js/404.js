(function typeWriter() {
    const speed = 30;
    const typewriterElement = document.querySelector('#typewriter');

    function animateText(element) {
        let i = 0;
        const text = element.textContent;
        element.textContent = '';

        const intervalId = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    }

    typewriterElement.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            animateText(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach((childNode) => {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    animateText(childNode);
                }
            });
        }
    });
})();
