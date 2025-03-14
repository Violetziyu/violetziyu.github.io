// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gifs = ["images/22.gif", "images/24.gif", "images/26.gif"]; // GIF路径
    const gifElement = document.querySelector(".gif");
    const textBlocks = document.querySelectorAll(".text-block");

    let currentGif = 0;

    // 切换GIF和文字描述的函数
    function switchGif() {
        // 切换GIF
        gifElement.src = gifs[currentGif];

        // 切换文字描述
        textBlocks.forEach((block, index) => {
            if (index === currentGif) {
                block.classList.add("active"); // 当前文字显示
            } else {
                block.classList.remove("active"); // 其他文字隐藏
            }
        });

        // 更新当前GIF索引
        currentGif = (currentGif + 1) % gifs.length;
    }

    // 监听滚动事件
    window.addEventListener("scroll", switchGif);

    // 初始调用一次，确保页面加载时显示第一张GIF和文字
    switchGif();
});