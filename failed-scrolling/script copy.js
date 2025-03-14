// script.js
const image = document.getElementById('long-image');
const texts = document.querySelectorAll('.text');
const anchorPercentages = [0, 0.1, 0.2, 0.3]; // 锚点位置，单位为图片高度的百分比
let currentAnchorIndex = 0;
let isScrolling = false; // 滚动锁

// 等待图片加载完成，获取图片的实际高度
image.onload = () => {
    updateImagePosition();
    updateText();
};

function updateImagePosition() {
    const imageHeight = image.naturalHeight; // 获取图片的实际高度
    const targetOffset = anchorPercentages[currentAnchorIndex] * imageHeight; // 锚点位置与屏幕顶部对齐
    image.style.transform = `translateY(-${targetOffset}px)`;
}

function updateText() {
    texts.forEach((text, index) => {
        text.classList.toggle('active', index === currentAnchorIndex);
    });
}

function handleScroll(event) {
    if (isScrolling) return; // 如果正在滚动，忽略新的滚动事件
    isScrolling = true; // 锁定滚动

    const delta = event.deltaY > 0 ? 1 : -1; // 判断滚动方向
    const nextAnchorIndex = currentAnchorIndex + delta;

    // 检查是否在锚点范围内
    if (nextAnchorIndex >= 0 && nextAnchorIndex < anchorPercentages.length) {
        currentAnchorIndex = nextAnchorIndex;
        updateImagePosition();
        updateText();
    }

    // 动画结束后解锁滚动
    setTimeout(() => {
        isScrolling = false;
    }, 500); // 等待图片和文字的动画完成（500ms）
}

// 监听滚动事件
window.addEventListener('wheel', handleScroll);

// 初始化
updateImagePosition();
updateText();