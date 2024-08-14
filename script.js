document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[data-image]');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip-image');
    document.body.appendChild(tooltip);

    links.forEach(link => {
        link.addEventListener('mouseover', function(event) {
            const imageUrl = link.getAttribute('data-image');
            tooltip.innerHTML = `<img src="${imageUrl}" alt="Tooltip Image">`;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        link.addEventListener('mousemove', function(event) {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        link.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.setAttribute('target', '_blank');
});